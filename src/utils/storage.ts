/**
 * Safe Browser Storage Utility
 * Provides resilient, SSR-safe, and exception-guarded access to localStorage and sessionStorage.
 * Prevents application crashes from QuotaExceededError, SecurityError, disabled storage,
 * or corrupted JSON data.
 */

// Memory fallback store when browser storage is unavailable or disabled
const memoryStorageFallback: Record<string, string> = {};

/**
 * Checks if browser storage is supported and accessible in current environment
 */
function isStorageAvailable(type: 'localStorage' | 'sessionStorage'): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  try {
    const storage = window[type];
    const testKey = '__storage_test__';
    storage.setItem(testKey, testKey);
    storage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

export const safeStorage = {
  /**
   * Safely retrieve and parse a JSON or primitive value from localStorage
   */
  getItem<T>(key: string, fallback: T): T {
    try {
      if (typeof window === 'undefined') {
        return fallback;
      }

      let rawValue: string | null = null;

      if (isStorageAvailable('localStorage')) {
        rawValue = window.localStorage.getItem(key);
      } else {
        rawValue = memoryStorageFallback[key] ?? null;
      }

      if (rawValue === null || rawValue === undefined) {
        return fallback;
      }

      // Handle simple string fallback when saved as raw string
      try {
        const parsed = JSON.parse(rawValue);
        return parsed as T;
      } catch {
        // If JSON.parse fails but value is a plain string, return as string if compatible
        return (rawValue as unknown) as T;
      }
    } catch {
      return fallback;
    }
  },

  /**
   * Safely serialize and store a value in localStorage
   */
  setItem<T>(key: string, value: T): boolean {
    try {
      if (typeof window === 'undefined') {
        return false;
      }

      const serialized = typeof value === 'string' ? value : JSON.stringify(value);

      if (isStorageAvailable('localStorage')) {
        window.localStorage.setItem(key, serialized);
      } else {
        memoryStorageFallback[key] = serialized;
      }
      return true;
    } catch {
      // Gracefully store in memory if localStorage fails (e.g. quota exceeded or private mode)
      try {
        memoryStorageFallback[key] = typeof value === 'string' ? value : JSON.stringify(value);
      } catch {
        // Ignore serialization issues
      }
      return false;
    }
  },

  /**
   * Safely remove a key from localStorage
   */
  removeItem(key: string): boolean {
    try {
      if (typeof window === 'undefined') {
        return false;
      }

      if (isStorageAvailable('localStorage')) {
        window.localStorage.removeItem(key);
      }
      delete memoryStorageFallback[key];
      return true;
    } catch {
      delete memoryStorageFallback[key];
      return false;
    }
  },

  /**
   * Safely retrieve and parse a value from sessionStorage
   */
  getSessionItem<T>(key: string, fallback: T): T {
    try {
      if (typeof window === 'undefined') {
        return fallback;
      }

      let rawValue: string | null = null;

      if (isStorageAvailable('sessionStorage')) {
        rawValue = window.sessionStorage.getItem(key);
      } else {
        rawValue = memoryStorageFallback[`session_${key}`] ?? null;
      }

      if (rawValue === null || rawValue === undefined) {
        return fallback;
      }

      try {
        return JSON.parse(rawValue) as T;
      } catch {
        return (rawValue as unknown) as T;
      }
    } catch {
      return fallback;
    }
  },

  /**
   * Safely serialize and store a value in sessionStorage
   */
  setSessionItem<T>(key: string, value: T): boolean {
    try {
      if (typeof window === 'undefined') {
        return false;
      }

      const serialized = typeof value === 'string' ? value : JSON.stringify(value);

      if (isStorageAvailable('sessionStorage')) {
        window.sessionStorage.setItem(key, serialized);
      } else {
        memoryStorageFallback[`session_${key}`] = serialized;
      }
      return true;
    } catch {
      return false;
    }
  },

  /**
   * Safely remove a key from sessionStorage
   */
  removeSessionItem(key: string): boolean {
    try {
      if (typeof window === 'undefined') {
        return false;
      }

      if (isStorageAvailable('sessionStorage')) {
        window.sessionStorage.removeItem(key);
      }
      delete memoryStorageFallback[`session_${key}`];
      return true;
    } catch {
      delete memoryStorageFallback[`session_${key}`];
      return false;
    }
  },
};
