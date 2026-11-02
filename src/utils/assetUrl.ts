const SOURCE_IMAGES: Record<string, string> = {
  '/src/assets/images/hero_cinematic_about_1792753239867.jpg': new URL('../assets/images/hero_cinematic_about_1792753239867.jpg', import.meta.url).href,
  '/src/assets/images/hero_cinematic_contact_1792753255228.jpg': new URL('../assets/images/hero_cinematic_contact_1792753255228.jpg', import.meta.url).href,
  '/src/assets/images/hero_cinematic_home_1792753254587.jpg': new URL('../assets/images/hero_cinematic_home_1792753254587.jpg', import.meta.url).href,
  '/src/assets/images/hero_cinematic_opportunities_1792753238747.jpg': new URL('../assets/images/hero_cinematic_opportunities_1792753238747.jpg', import.meta.url).href,
  '/src/assets/images/hero_cinematic_services_1792753237458.jpg': new URL('../assets/images/hero_cinematic_services_1792753237458.jpg', import.meta.url).href,
  '/src/assets/images/hero_cyber_umbrella_banner_1792984625298.jpg': new URL('../assets/images/hero_cyber_umbrella_banner_1792984625298.jpg', import.meta.url).href,
  '/src/assets/images/cover_cyber_quest_1792993309160.jpg': new URL('../assets/images/cover_cyber_quest_1792993309160.jpg', import.meta.url).href,
  '/src/assets/images/cover_spot_scam_1792993323606.jpg': new URL('../assets/images/cover_spot_scam_1792993323606.jpg', import.meta.url).href,
  '/src/assets/images/service_digital_safety_net_1792753239595.jpg': new URL('../assets/images/service_digital_safety_net_1792753239595.jpg', import.meta.url).href
};

export function assetUrl(path: string): string {
  const sourceImage = SOURCE_IMAGES[path];
  if (sourceImage) {
    return sourceImage;
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}