import { TextProps } from 'design-system/atoms/text/text.interfaces';

const imagePath = '/images/home/healthy-soils';

export const healthySoilsSlides: {
  name: string;
  color: TextProps['color'];
  arrowsImage: string;
  content: string;
  imageUrl: string;
  imageClassName?: string;
}[] = [
  {
    name: 'healthy soil',
    color: 'pink',
    arrowsImage: `${imagePath}/healthy_soils_arrows.svg`,
    content:
      'as gravity, wind, and water weathered rocks into smaller and smaller pieces, soils began to form on Earth, supporting greater and greater complexity and diversity of life!',
    imageUrl: 'Healthy_Soil_Wheel/healthy_soil_EDjnsYWrb',
    imageClassName: 'object-right',
  },
  {
    name: 'healthy plants',
    color: 'teal',
    arrowsImage: `${imagePath}/healthy_plants_arrows.svg`,
    content:
      'healthy soils are teeming with microbes, hard at work, making nutrients available to plants.  water and air flows through them easily and they tend to be resilient in the face of disease and drought.',
    imageUrl: '/Healthy_Soil_Wheel/Healthy_Plants_Slide_4_cKAklPcPW.jpg',
    imageClassName: 'object-left',
  },
  {
    name: 'healthy people',
    color: 'yellow',
    arrowsImage: `${imagePath}/healthy_people_arrows.svg`,
    content:
      'healthy plants and animals provide the base for a healthy human diet. the food we eat provides the building blocks that make up every cell of our bodies.  you, literally, are what you eat!',
    imageUrl: '/Healthy_Soil_Wheel/celeste-horrocks-nattvZsRmkM-unsplash_B6aDkSYSqd1.jpg',
    imageClassName: 'object-right',
  },
  {
    name: 'healthy communities',
    color: 'pink',
    arrowsImage: `${imagePath}/healthy_communities_arrows.svg`,
    content:
      'sustainable farming can revitalize whole communities, providing jobs and secure access to food. gardens also bring communities together, empowering people with tools of self-sufficiency and uniting us on common ground.',
    imageUrl: 'Healthy_Soil_Wheel/healthy_communities_tGodL-sf1',
    imageClassName: 'object-right',
  },
  {
    name: 'healthy economies',
    color: 'teal',
    arrowsImage: `${imagePath}/healthy_economies_arrows.svg`,
    content:
      'soils produce the raw materials that form the base of our global economy. improving soil health can reduce input costs and increase yields, which means more stable food prices, and more profit in the grower’s pocket!',
    imageUrl: '/Healthy_Soil_Wheel/Healthy_Economies_Slide_GM6V39-DT.jpeg',
    imageClassName: 'object-left',
  },
  {
    name: 'healthy planet',
    color: 'yellow',
    arrowsImage: `${imagePath}/healthy_planet_arrows.svg`,
    content:
      'healthy soils silently deliver ecosystem services that support life as we know it. healthy soils filter our air and water; protect against floods, sequester carbon; reduce pest and disease pressure; and encourage biodiversity.',
    imageUrl: '/Healthy_Soil_Wheel/Healthy_Planet_Slide_sCpQXXtZRtT.jpg',
    imageClassName: 'scale-105 object-bottom',
  },
];
