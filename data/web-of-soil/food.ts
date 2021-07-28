export const graph: {
  nodes: {
    id: string;
    description: string;
    label: string;
    link: string;
    image: string;
    shape: 'circularImage';
    size?: number;
    fixed?: any;
  }[];
  edges: { from: string; to: string; length?: number }[];
} = {
  nodes: [
    {
      id: 'Soil',
      label: 'Soil',
      description:
        'Grazed land stores more carbon and nitrogen than ungrazed land, improving soil quality and decreasing the pool of greenhouse gases in the atmosphere!',
      link: 'https://agresearchmag.ars.usda.gov/2011/mar/soil',
      image: '',
      shape: 'circularImage',
    },
    {
      id: 'Pizza',
      label: 'Pizza',
      description:
        'Napizza, a pizzeria based in San Diego, CA sources 80% of their ingredients from a 400 mile radius. As a Certified Green Restaurant by the Green Restaurant Association, they value the relationships with farmers and ranchers who also believe in sustainable practices. Next time you enter a pizza place, ask where their ingredients are sourced! Consumer power!!',
      link: 'http://www.pizzatoday.com/departments/in-the-kitchen/greening-the-menu/',
      image: 'https://ik.imagekit.io/q9koofhilw/Web_of_Soil/food/Pizza_61z-qRpvx.jpg?updatedAt=1620645784210',
      shape: 'circularImage',
    },
    {
      id: 'Cheese',
      label: 'Cheese',
      description:
        "The average American consumes 27 pounds of cheese each year. - digestion. Different cows' milks will produce different qualities of cheeses due to the varying levels of milk fat and proteins within the milk!",
      link: 'http://www.npr.org/templates/story/story.php?storyId=5760332   http://babcockhalldairyplant.wisc.edu/tours-2/fun-facts/',
      image: 'https://ik.imagekit.io/q9koofhilw/Web_of_Soil/food/Cheese_itFI141S5.jpg?updatedAt=1620645770152',
      shape: 'circularImage',
    },
    {
      id: 'Processing Milk',
      label: 'Processing Milk',
      description:
        'Some bacteria are beneficial to our ecosystems and even our guts; however, bacteria found in raw milk, such as Salmonella, E.Coli, and Listeria, can be harmful to human health if consumed. Pasteurization is a process used to kill these harmful bacteria by heating the milk to specific temperatures.',
      link: 'https://www.fda.gov/Food/ResourcesForYOu/consumers/ucm079516.htm',
      image: 'https://ik.imagekit.io/q9koofhilw/Web_of_Soil/food/Milk_VuPeYOfZ-.jpg?updatedAt=1620645781425',
      shape: 'circularImage',
    },
    {
      id: 'Cows',
      label: 'Cows',
      description:
        'Cows are working to combat climate change! Scientists at the University of Florida are conducting genetic research searching for the key DNA in heat tolerant mechanisms, as 40% of beef cows in the United States reside in hot and humid environments, many of which are projected to get even hotter.',
      link: 'https://www.sciencedaily.com/releases/2017/06/170623100712.htm?utm_source=feedburner&utm_medium=email&utm_campaign=Feed%3A+sciencedaily%2Fplants_animals%2Fagriculture_and_food+%28Agriculture+and+Food+News+--+ScienceDaily%29',
      image: 'https://ik.imagekit.io/q9koofhilw/Web_of_Soil/food/Cow_aM0u70h29.jpg?updatedAt=1620645773908',
      shape: 'circularImage',
    },
    {
      id: 'Eating Grass',
      label: 'Eating Grass',
      description:
        'Grazed pasture is considered the best land use for storing carbon--great for combating climate change! Find your local pasture-based farm at here! Pasture-grazing can save farmers about $579/cow, savings found in labor, crop costs (seed, fertilizer, lime, pesticide), repairs, fuel and oil.',
      link: 'http://www.eatwild.com/index.html',
      image: 'https://ik.imagekit.io/q9koofhilw/Web_of_Soil/food/Grass_QCF06HepupL.jpg?updatedAt=1620645778449',
      shape: 'circularImage',
    },
    {
      id: 'Wheat Plant',
      label: 'Wheat Plant',
      description:
        'Wheat is composed of three parts: the germ, which germinates into a new plant , the endosperm, which provides nutrients for the germ, and the brain, which serves as outer protection.',
      link: 'https://hort.purdue.edu/newcrop/Crops/Wheat.html',
      image: 'https://ik.imagekit.io/q9koofhilw/Web_of_Soil/food/Wheat_3bPX3qlW4qG.jpg?updatedAt=1620645762804',
      shape: 'circularImage',
    },
    {
      id: 'Wheat Field',
      label: 'Wheat Field',
      description:
        'One study found that crop productivity in drier seasons was increased due to reducing soil tillage in Central Morocco through reducing water and soil loss.',
      link: 'http://www.fao.org/news/story/en/item/273303/icode/',
      image: 'https://ik.imagekit.io/q9koofhilw/Web_of_Soil/food/Wheat_3bPX3qlW4qG.jpg?updatedAt=1620645762804',
      shape: 'circularImage',
    },
    {
      id: 'Processing Grain/Wheat',
      label: 'Processing Grain/Wheat',
      description:
        'The by-products of processing grain or wheat, known as bran and germ waste, are being salvaged for their polysaccharides and phenolic moieties! This research could serve a giant leap towards a closed cycle system- one which utilizes the outputs from one process as inputs for another!',
      link: 'https://www.kth.se/profile/franvila/page/research-projects',
      shape: 'circularImage',
      image: '',
    },
    {
      id: 'Dough',
      label: 'Dough',
      description:
        "Pizza's partner in crime is yeast, a single-celled fungus! Yeast eats and breaks down sugars in the dough, breathing out CO2, creating air pockets to your dough rise!",
      link: 'http://science.howstuffworks.com/innovation/edible-innovations/pizza2.htm',
      image: 'https://ik.imagekit.io/q9koofhilw/Web_of_Soil/food/Dough_VUmorhs8O2.jpg?updatedAt=1620645774132',
      shape: 'circularImage',
    },
  ],
  edges: [
    { from: 'Soil', to: 'Eating Grass' },
    { from: 'Eating Grass', to: 'Cows' },
    { from: 'Cows', to: 'Processing Milk' },
    { from: 'Processing Milk', to: 'Cheese' },
    { from: 'Cheese', to: 'Pizza' },

    { from: 'Soil', to: 'Wheat Plant' },
    { from: 'Wheat Plant', to: 'Wheat Field' },
    { from: 'Wheat Field', to: 'Processing Grain/Wheat' },
    { from: 'Processing Grain/Wheat', to: 'Dough' },
    { from: 'Dough', to: 'Pizza' },
  ],
};
