export const themes = ['light', 'dark'] as const;
export type Theme = typeof themes[number];

export const defaultTheme: Theme = 'dark';

export const tradingColors = {
  bull: '#00C89F',
  bear: '#F23645',
  warning: '#F59E0B',
  chart: {
    bg: '#1A1A1A',
    grid: '#2A2A2A',
    text: '#FFFFFF',
  }
}; 