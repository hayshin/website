export function calculateSystemInfoHeight(systemInfo: Record<string, string>) {
  return Object.keys(systemInfo).length + 2;
}

export function calculateLogoHeight(logo: string) {
  return logo.split('\n').length;
}

export function calculateSystemInfoWidth(systemInfo: Record<string, string>) {
  return (
    Math.max(...Object.entries(systemInfo).map(([key, value]) => key.length + value.length)) + 2
  );
}

export function calculateLogoWidth(logo: string) {
  return Math.max(...logo.split('\n').map(line => line.length));
}

export function calculateLogoVerticalPadding(logoHeight: number, systemInfoHeight: number) {
  return Math.ceil((systemInfoHeight - logoHeight) / 2);
}

export function calculateLogoHorizontalPadding(logoWidth: number, systemInfoWidth: number) {
  return Math.ceil((systemInfoWidth - logoWidth) / 2);
}

export function expandLogoVertically(logo: string, logoVerticalPadding: number) {
  logoVerticalPadding = Math.max(logoVerticalPadding, 0);
  const padding = '\n'.repeat(logoVerticalPadding);
  return padding + logo + padding;
}

export function expandLogoHorizontally(logo: string, logoHorizontalPadding: number) {
  logoHorizontalPadding = Math.max(logoHorizontalPadding, 0);
  const padding = ' '.repeat(logoHorizontalPadding);
  return logo
    .split('\n')
    .map(line => `${padding}${line}${padding}`)
    .join('\n');
}
