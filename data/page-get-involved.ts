import { IconProp } from '@fortawesome/fontawesome-svg-core';

const mainImages = [
  {
    imageUrl: '/Get_Involved/At_Home_Slide_nAzHm38yi.jpg',
    twBgColor: 'bg-pink-500',
  },
  {
    imageUrl: '/Get_Involved/in_your_community_slide_clearer_4NO-ohvceKo.jpeg',
    twBgColor: 'bg-yellow-500',
  },
  {
    imageUrl: '/Get_Involved/Social_Media_Slide_lswziiogO.jpg',
    twBgColor: 'bg-blue-500',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators_Slide_dmW4-JibgacR.jpg',
    twBgColor: 'bg-teal-500',
  },
  {
    imageUrl: '/Get_Involved/ForYourEducation_aaron-burden-236415_S2iS5IEYlhK.jpg',
    twBgColor: 'bg-gray-500',
  },
  {
    imageUrl: '/Get_Involved/fabian-blank-pElSkGRA2NU-unsplash_hUqHU3rqw.jpg',
    twBgColor: 'bg-orange-500',
  },
];

const homeSectionCards = [
  {
    imageUrl: '/Get_Involved/At_Home/sincerely-media-Agr1YTrzYPI-unsplash_mKofVduh0.jpg',
    text: 'start a garden',
    links: [
      {
        name: 'Climate Victory Gardens',
        href: 'https://www.greenamerica.org/climate-victory-gardens',
      },
      { name: 'Old Farmers Almanac', href: 'https://www.almanac.com/vegetable-gardening-for-beginners' },
      {
        name: 'Urban Harvest',
        href: 'https://www.urbanharvest.org/gardening-advice/',
      },
      {
        name: 'NPR',
        href: 'https://www.npr.org/2020/04/17/837300800/this-is-a-good-time-to-start-a-garden-heres-how',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/At_Home/heather-ford-nHTZLszh2No-unsplash_0xT3Y7NSHa8.jpg',
    text: 'start a worm bin',
    links: [
      { name: 'LAWFC', href: 'http://lawormfarmcollective.com/index.php/about-worm-castings/' },
      { name: 'Cal Recylce', href: 'http://www.calrecycle.ca.gov/organics/Worms/Default.htm' },
    ],
  },
  {
    imageUrl: '/Get_Involved/At_Home/At_Home_Compost_Your_Waste.jpg',
    text: 'start a compost pile',
    links: [
      { name: 'EPA', href: 'https://www.epa.gov/recycle/composting-home' },
      { name: 'NPR', href: 'https://www.npr.org/2020/04/07/828918397/how-to-compost-at-home' },
      { name: 'Cal Recycle', href: 'http://www.calrecycle.ca.gov/organics/HomeCompost/default.htm' },
      { name: 'Mind Body Green', href: 'https://www.mindbodygreen.com/articles/how-to-make-a-diy-compost-bin' },
    ],
  },
  {
    imageUrl: '/Get_Involved/At_Home/Get_Involved_Native_Plants_WAjgrzNgsbb.jpg',
    text: 'convert your lawn to native plants',
    links: [
      {
        name: 'Wild Seed Project',
        href: 'https://wildseedproject.net/2022/03/return-of-the-meadow/',
      },
      {
        name: 'Lawn to Wildflowers',
        href: 'https://www.lawntowildflowers.org/news/bringing-your-lawn-back-to-life-by-converting-turfgrass-to-native-wildflowers',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/At_Home/1_At_Home_6_Leaves_bjw078rtK_J.jpg',
    text: 'leave the leaves',
    links: 'https://www.consumerreports.org/lawn-care/for-the-greenest-yard-leave-the-leaves-behind/',
  },
  {
    imageUrl: '/Get_Involved/At_Home/1_At_Home_7_Mulch_DtuGIfUMS.jpg',
    text: 'mulch!',
    links: 'https://getchipdrop.com/',
  },
  {
    imageUrl: '/Get_Involved/At_Home/At_Home_Paint_with_Soil_0ONI0hdafWa.png',
    text: 'make your own soil paints',
    links: 'https://www.fortheloveofsoil.org/pigment-process',
  },
  {
    imageUrl: '/Get_Involved/At_Home/Find_Your_Soil_uN58w4fF_.png',
    text: 'learn what soil is under your feet',
    links: 'https://casoilresource.lawr.ucdavis.edu/gmap/',
  },
];

const communitySectionCards = [
  {
    imageUrl: '/Get_Involved/In_Your_Community/2_In_Your_Community_1_Farmers_Market_6s7gIUSNp.jpg',
    text: "shop at your local farmer's market",
    links: 'https://www.ams.usda.gov/local-food-directories/farmersmarkets',
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/join_a_csa_JVR7ApOsb.jpeg',
    text: 'join a CSA',
    links: 'https://www.localharvest.org/csa/',
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/14681038_1199679813408915_1486697207914271783_o_zsnPCa0bTkn.jpg',
    text: 'join a community garden',
    links: [
      { name: "Let's Move", href: 'https://letsmove.obamawhitehouse.archives.gov/community-garden-checklist' },
      { name: 'Community Garden Association', href: 'https://www.communitygarden.org/garden' },
      {
        name: 'Create the Good',
        href: 'https://createthegood.aarp.org/content/dam/aarp/ctg/pdf/guides/community-garden.pdf',
      },
      { name: 'Tree Hugger', href: 'https://www.treehugger.com/ever-wondered-how-start-community-garden-4858632' },
    ],
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/2_In_Your_Community_5_Farm_to_Fork_AyHl6mQNG.jpg',
    text: 'eat at a farm-to-fork restaurant',
    links: 'https://www.eatwellguide.org/',
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/local_grocery_e3a7oQlPAHb.jpeg',
    text: 'join a food co-op',
    links: 'http://www.coopdirectory.org/',
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/you-pick_91UDWJAy2.jpeg',
    text: 'visit a u-pick-farm',
    links: 'https://upickfarmlocator.com/',
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/Go_for_a_hike_Pl7SbQmhn.jpg',
    text: 'go for a hike',
    links: 'https://www.alltrails.com/',
  },
  {
    imageUrl: '/Get_Involved/In_Your_Community/At_Home_Find_Park_HFdlTqdc2CO.png',
    text: 'find your park!',
    links: 'https://findyourpark.com/',
  },
];

const socialMediaSectionCards = [
  {
    icon: ['fab', 'facebook-square'] as IconProp,
    text: 'follow us on facebook',
    links: 'https://www.facebook.com/TheSoilLife/',
  },
  {
    icon: ['fab', 'instagram-square'] as IconProp,
    text: 'follow us on instagram',
    links: 'https://www.instagram.com/soil.life/',
  },
  {
    icon: ['fab', 'twitter-square'] as IconProp,
    text: 'follow us on twitter',
    links: 'https://twitter.com/the_Soil_Life',
  },
  {
    imageUrl: '/Get_Involved/Social_Media/Screen_Shot_2021-05-10_at_1.31.51_AM_OT8btMgFB.png',
    text: 'get the game: starting with soil',
    links: 'https://www.ecoliteracy.org/download/starting-soil',
  },
  {
    imageUrl: '/Get_Involved/Social_Media/6_On_Social_Media_ShareYourStory_apmExSB1M.jpg',
    text: 'create a soil story and share!',
    links: 'http://www.coopdirectory.org/',
  },
  {
    imageUrl: '/Get_Involved/Social_Media/Screen_Shot_2021-05-09_at_7.55.55_PM_9efUEnG9F.png',
    text: 'start an openteam hub',
    links: 'https://openteam.community/hub-and-network-program/f',
  },
  {
    imageUrl: '/Get_Involved/Social_Media/Screen_Shot_2021-05-09_at_7.51.42_PM_1LWzL4cBpJv.png',
    text: 'become a fibershed affiliate',
    links: 'https://fibershed.org/programs/education-advocacy/affiliate-program/',
  },
  {
    imageUrl: '/Get_Involved/Social_Media/Screen_Shot_2021-05-09_at_8.15.16_PM_FexuP4ixSSL.png',
    text: 'join the soil profile network',
    links: 'https://www.soilbook.info/?lang=en',
  },
];

const legislationSectionCards = [
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/start_healthy_soils_initiative_SpH3kfQBd.png',
    text: 'start a healthy soil initiative',
    links: 'https://www.cdfa.ca.gov/oefi/healthysoils/',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/3_With_Your_Legislators_2_Write_to_Your_Legislators_xG6M6vDM2qf.jpg',
    text: 'write to your legislator',
    links: 'https://openstates.org/find_your_legislator/',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/3_With_Your_Legislators_3_Submit_Resolution_cacAyoH_X.jpg',
    text: 'submit a soils resolution',
    links:
      'http://notillveggies.org/2015/03/12/maine-is-the-first-state-to-pay-tribute-to-soils-during-the-international-year-of-soils/',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/wolfgang-hasselmann-P7SjXA2hxMY-unsplash__T9TDAtvz.jpg',
    text: 'track healthy soils legislation',
    links: [
      { name: 'Nerds for Earth', href: 'https://nerdsforearth.com/state-healthy-soils-policy/' },
      {
        name: 'Land Core Bill Tracker',
        href: 'https://docs.google.com/spreadsheets/d/1XwdVfZO2SxqPJ4c6oYq-9CpsLf-6qn-4VUgeo7hih3E/edit#gid=508030997',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/3_With_Your_Legislators_4_Cap_and_Trade_WDBr6qc7U.jpg',
    text: 'follow Land Core',
    links: 'https://landcore.org/',
  },
  {
    imageUrl:
      '/Get_Involved/With_Your_Legislators/3_With_Your_Legislators_5_Resource_Conservation_District_E3qlosWp8Dc.jpg',
    text: "support RCD's",
    links: 'https://www.nacdnet.org/about-nacd/about-districts/',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/christian-wiediger-v3lA7GROOHg-unsplash_lvGiS0qOR.jpg',
    text: 'request green waste programs',
    links:
      'https://www.google.com/search?ei=lAukW9-OMtTq9AOFs474Dw&q=request+a+compost+bin&oq=request+a+compost+bin&gs_l=psy-ab.3..0i30l2.14435.15187..17124...0.0..0.80.145.2......0....1..gws-wiz.......0i71.stLlaipX2oM',
  },
  {
    imageUrl: '/Get_Involved/With_Your_Legislators/ales-krivec-976-unsplash_21_hVO8UiZni.jpg',
    text: 'support the conversation reserve program',
    links: 'https://www.fsa.usda.gov/programs-and-services/conservation-programs/conservation-reserve-program/',
  },
];

const educationSectionCards = [
  {
    imageUrl: '/Get_Involved/For_Your_Education/4_For_Your_Education_1_Watch_rpM11xFD1.jpg',
    text: 'watch',
    links: [
      { name: 'Symphony of the Soil', href: 'http://www.symphonyofthesoil.com/' },
      { name: 'Soil Solutions', href: 'https://www.youtube.com/watch?v=NxqBzrx9yIE' },
      {
        name: 'Dirt: The Movie',
        href: 'https://www.youtube.com/watch?v=uHhhHpohglg',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/4_For_Your_Education_2_Read_XCx2tlQi3.jpg',
    text: 'read',
    links: [
      {
        name: 'Growing a Revolution',
        href: 'https://www.amazon.com/Growing-Revolution-Bringing-Soil-Back/dp/0393608328',
      },
      {
        name: 'Out of the Earth',
        href: 'https://www.amazon.com/Out-Earth-Civilization-Life-Soil/dp/0520080807/ref=sr_1_1?s=books&ie=UTF8&qid=1535611642&sr=1-1&keywords=out+of+the+earth',
      },
      {
        name: 'Know Soil, Know Life',
        href: 'https://www.amazon.com/Know-Soil-Life-David-Lindbo/dp/0891189548/ref=pd_sim_14_24?_encoding=UTF8&pd_rd_i=0891189548&pd_rd_r=1c60d90f-ac20-11e8-b11d-915b29cfa4b3&pd_rd_w=YTtrW&pd_rd_wg=zj0yF&pf_rd_i=desktop-dp-sims&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=a180fdfb-b54e-4904-85ba-d852197d6c09&pf_rd_r=EY1RZJR2SHDJ17WQ6YST&pf_rd_s=desktop-dp-sims&pf_rd_t=40701&psc=1&refRID=EY1RZJR2SHDJ17WQ6YST',
      },
      {
        name: 'An Agricultural Testament',
        href: 'https://www.amazon.com/Agricultural-Testament-Sir-Albert-Howard/dp/1388187485/ref=pd_cp_14_1?pf_rd_m=ATVPDKIKX0DER&pf_rd_p=fcaa6d12-8b2b-4ad7-b277-864b2da79f6e&pf_rd_r=VGHHJHTBKSYH6DMHK010&pd_rd_wg=pvOHU&pf_rd_s=desktop-dp-sims&pf_rd_t=40701&pd_rd_w=Kc2jH&pf_rd_i=desktop-dp-sims&pd_rd_r=9fe4e879-ac20-11e8-ad5d-f9d1f1abea37&pd_rd_i=1388187485&psc=1&refRID=VGHHJHTBKSYH6DMHK010',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/4_For_Your_Education_4_Take_a_Class_mzmSD7pnN.jpg',
    text: 'take a class',
    links: [
      {
        name: 'edX',
        href: 'https://www.edx.org/learn/soil',
      },
      { name: 'Cooperative Extension', href: 'https://mastergardener.extension.org/contact-us/find-a-program/' },
      { name: 'Coursera', href: 'https://www.coursera.org/courses?query=soil ' },
    ],
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/SoilsRevealed_Illustration_01_UdYobwDTI.jpeg',
    text: 'explore the map',
    links: 'https://soilsrevealed.org/explore',
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/4_For_Your_Education_5_NRCS_Resources_NHA82T4zL.jpg',
    imageContain: true,
    text: 'browse NRCS resources',
    links: 'https://www.nrcs.usda.gov/wps/portal/nrcs/site/national/home/',
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/4_For_Your_Education_6_SSSA_Resources_9WPD4w1pj.jpg',
    imageContain: true,
    text: 'browse SSSA resources',
    links: 'https://www.soils.org/discover-soils',
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/Screen_Shot_2021-05-09_at_7.27.19_PM_fqeUgjfs8.png',
    text: 'explore the UCD soil health portal',
    links: 'http://soilhealth.ucdavis.edu/',
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/soil_health_nexus_lZLOxRngB.svg',
    imageContain: true,
    text: 'explore the soil health nexus',
    links: 'https://soilhealthnexus.org/resources/',
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/For_Your_Ed_Explore_For_The_Love_of_Soil_c6tWn9q_M.png',
    text: 'explore "for the love of soil"',
    links: 'https://www.fortheloveofsoil.org/educate',
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/citizen_soil_science_gIIoeJIcM.jpg',
    text: 'submit soil to citizen science',
    links: [
      {
        name: "What's in your Backyard?",
        href: 'https://whatsinyourbackyard.org/',
      },
      { name: 'Drugs from Dirt', href: 'https://www.drugsfromdirt.org/' },
      { name: 'Nat Geographic', href: 'https://www.nationalgeographic.org/idea/citizen-science-projects/?page=1' },
    ],
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/Players_Soil_Biology_tardigrade_protozoaslide_bmxw1jrtlnE.jpg',
    text: 'learn more about soil organisms',
    links: [
      {
        name: 'Soil Biodiversity Atlas',
        href: 'https://www.globalsoilbiodiversity.org/atlas-introduction',
      },
      { name: 'Chaos of Delight', href: 'https://www.chaosofdelight.org/' },
      { name: "State of the World's Fungi", href: 'https://stateoftheworldsfungi.org/' },
    ],
  },
  {
    imageUrl: '/Get_Involved/For_Your_Education/For_Your_Education_Soil_Colors_of_National_Parks_Gb4g_qcfTq3.png',
    text: 'explore soil colors of national parks',
    links: 'https://munsell.com/color-blog/soil-colors-national-parks-anniversary/',
  },
];

const donationsSectionCards = [
  {
    imageUrl: '/Get_Involved/Through_Donations/5_Through_Donations_1_Adopt_an_Acre_8EngGl7Ng.jpg',
    text: 'adopt an acre',
    links: [
      {
        name: 'Nature Conservancy',
        href: 'https://www.nature.org/en-us/membership-and-giving/donate-to-our-mission/other-ways-to-give/adopt-an-acre/',
      },
      {
        name: 'American Farmland Trust',
        href: 'https://farmland.org/donate/#:~:text=Your%20support%20allows%20American%20Farmland,all%2C%20No%20Farms%20No%20Food',
      },
      {
        name: 'National Wildlife Federation',
        href: 'https://www.nwf.org/Our-Work/Our-Lands/Adopt-a-Wildlife-Acre',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/5_Through_Donations_2_Support_Future_Farmers_Zmeiu39TB.jpg',
    text: 'support future farmers',
    links: [
      {
        name: '4H',
        href: 'https://4-h.org/get-involved/donate/',
      },
      { name: 'Future Farmers of America (FFA)', href: 'https://www.ffa.org/ways-to-give/' },
      {
        name: 'National Young Farmers Coalition',
        href: 'https://connect.clickandpledge.com/w/Form/66f36e19-c320-4903-9c88-aa4f2ca5b7f0',
      },
    ],
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/5_Through_Donations_3_Community_Gardening_2FmqLN8Aajo.jpg',
    text: 'support community projects',
    links: [
      { name: 'Barnraiser', href: 'https://www.barnraiser.us/' },
      { name: 'Insight Gardens', href: 'http://insightgardenprogram.org/donate/' },
      { name: 'Urban Tilth', href: 'https://www.urbantilth.org/page_id22/' },
      { name: 'Ron Finley Project', href: 'http://ronfinley.com/the-ron-finley-project/' },
    ],
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/Screen_Shot_2021-05-09_at_8.18.55_PM_E75j_wlReSn.png',
    imageContain: true,
    text: 'support BIPOC farmers',
    links: 'https://www.soulfirefarm.org/get-involved/reparations/',
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/5_Through_Donations_Sustenance_Farmer_JycCq3NXv-U.jpg',
    text: 'support a sustenance farmer',
    links: 'https://www.kiva.org/lend/agriculture',
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/support_farmer_veteran_7D4Nj8bSl.jpeg',
    text: 'support veteran farmers',
    links: 'https://farmvetco.org/',
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/5_Through_Donations_4_Fund_Research_InfzvDXhZ.jpg',
    text: 'fund soil health research',
    links: [
      {
        name: 'Russel Ranch',
        href: 'http://asi.ucdavis.edu/programs/rr/support-russell-ranch',
      },
      { name: 'Soil Health Institute', href: 'https://soilhealthinstitute.org/support-shi/' },
      { name: 'FFAR', href: 'https://foundationfar.org/donate/' },
    ],
  },
  {
    imageUrl: '/Get_Involved/Through_Donations/Support_our_Work_N2LJ-eI5lRD.png',
    text: 'support our work',
    links: '#',
  },
];

export const getInvolvedPageData = {
  mainImages,
  homeSectionCards,
  communitySectionCards,
  socialMediaSectionCards,
  legislationSectionCards,
  educationSectionCards,
  donationsSectionCards,
};
