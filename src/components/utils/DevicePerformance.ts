// Device performance detection utility
export interface DeviceInfo {
  isLowEndDevice: boolean;
  isMobile: boolean;
  supportsAdvancedAnimations: boolean;
  memoryGB: number;
  cores: number;
  connectionSpeed: 'slow' | 'medium' | 'fast';
}

class DevicePerformanceDetector {
  private static instance: DevicePerformanceDetector;
  private deviceInfo: DeviceInfo | null = null;

  private constructor() {}

  static getInstance(): DevicePerformanceDetector {
    if (!DevicePerformanceDetector.instance) {
      DevicePerformanceDetector.instance = new DevicePerformanceDetector();
    }
    return DevicePerformanceDetector.instance;
  }

  getDeviceInfo(): DeviceInfo {
    if (this.deviceInfo) {
      return this.deviceInfo;
    }

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Memory detection
    const memory = (navigator as any).deviceMemory || 4; // Default to 4GB if not available
    
    // CPU cores detection
    const cores = navigator.hardwareConcurrency || 4; // Default to 4 cores
    
    // Connection speed detection
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    let connectionSpeed: 'slow' | 'medium' | 'fast' = 'medium';
    
    if (connection) {
      const effectiveType = connection.effectiveType;
      if (effectiveType === 'slow-2g' || effectiveType === '2g') {
        connectionSpeed = 'slow';
      } else if (effectiveType === '3g') {
        connectionSpeed = 'medium';
      } else {
        connectionSpeed = 'fast';
      }
    }

    // Simple performance check - reduced from heavy benchmark
    const isLowEndDevice = (
      memory < 4 || 
      cores < 4 || 
      connectionSpeed === 'slow' ||
      (isMobile && (memory < 3 || cores < 4))
    );

    const supportsAdvancedAnimations = !isLowEndDevice && !isMobile;

    this.deviceInfo = {
      isLowEndDevice,
      isMobile,
      supportsAdvancedAnimations,
      memoryGB: memory,
      cores,
      connectionSpeed
    };

    return this.deviceInfo;
  }

  // Quick synchronous check for immediate use
  isLowEndDeviceSync(): boolean {
    const memory = (navigator as any).deviceMemory || 4;
    const cores = navigator.hardwareConcurrency || 4;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    return memory < 4 || cores < 4 || (isMobile && memory < 3);
  }
}

export const devicePerformance = DevicePerformanceDetector.getInstance();

// Performance-aware animation settings
export const getAnimationConfig = (isLowEnd: boolean) => ({
  duration: isLowEnd ? 0.3 : 0.6,
  ease: isLowEnd ? "easeOut" : "easeInOut",
  staggerDelay: isLowEnd ? 0.05 : 0.1,
  enableComplexAnimations: !isLowEnd,
  reducedMotion: isLowEnd
});

// Image loading optimization
export const getImageConfig = (isLowEnd: boolean) => ({
  quality: isLowEnd ? 70 : 90,
  enableLazyLoading: true,
  enableBlur: !isLowEnd,
  preloadCritical: !isLowEnd
});

// Render optimization
export const shouldRenderComplexEffect = (isLowEnd: boolean, isMobile: boolean) => {
  return !isLowEnd && !isMobile;
};