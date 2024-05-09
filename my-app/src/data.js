const data = [
    {
      id: 1,
      question: "What are some must-see historical landmarks in Pune?",
      answer:
        "Pune boasts a rich heritage. Explore the Shaniwar Wada (seat of the Peshwa rulers), Aga Khan Palace (memorial to the Aga Khan), Sinhagad Fort (hilltop fortress), Lal Mahal (17th-century palace), or the Raja Dinkar Kelkar Museum (housing artifacts showcasing Indian life).",
    },
    {
      id: 2,
      question: "Where can I find serene natural beauty in Pune?",
      answer:
        "Pune offers a haven for nature lovers. Visit the scenic Vetal Tekdi (hill with panoramic views), Parvati Hill (popular for trekking and picnics), or the Okayama Friendship Garden (inspired by Japanese gardens).",
    },
    {
      id: 3,
      question: "Are there any unique cultural experiences in Pune?",
      answer:
        "Pune is a vibrant tapestry of cultures. Visit the Dagadusheth Halwai Ganapati Temple (dedicated to Lord Ganesha), the Pataleshwar Cave Temple (ancient rock-cut temple), or the Chaturshringi Temple (Hindu temple dedicated to Goddess Durga).",
    },
    {
      id: 4,
      question: "Where can I experience the local shopping scene in Pune?",
      answer:
        "Pune is a shopper's paradise! Head to the bustling Laxmi Road for traditional Maharashtrian items, fashion accessories, and street food. For a modern shopping experience, visit the Phoenix Market City mall.",
    },
    {
      id: 5,
      question: "What are some exciting activities to do in Pune?",
      answer:
        "Pune offers a variety of activities. Take a cycling tour through the city, visit the National Film Archive of India, or catch a live performance at the Bal Gandharva Rang Mandir (theater).",
    },
  
    {
      id: 6,
      question: "What are some iconic landmarks in Mumbai?",
      answer:
        "Mumbai, the 'City of Dreams,' is known for its historical significance and architectural marvels. Explore the Gateway of India, Chhatrapati Shivaji Maharaj Terminus (formerly Victoria Terminus), Marine Drive (scenic promenade), or the Elephanta Caves (ancient rock-cut cave temples).",
    },
    {
      id: 7,
      question: "Where can I experience the vibrant culture of Mumbai?",
      answer:
        "Immerse yourself in Mumbai's diverse culture. Visit the bustling streets of Colaba Causeway for shopping, explore Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (formerly Prince of Wales Museum) for historical artifacts, or catch a Bollywood movie at a local cinema.",
    },
    {
      id: 8,
      question: "Are there any beautiful beaches near Mumbai?",
      answer:
        "Escape the city and relax on Mumbai's scenic beaches. Juhu Beach is a popular spot for swimming, sunbathing, and street food, while Aksa Beach offers a more serene atmosphere.",
    },
    {
      id: 9,
      question: "What are some interesting weekend getaways from Mumbai?",
      answer:
        "Explore destinations near Mumbai for a refreshing break. Visit Lonavala (hill station with waterfalls and caves), Khandala (scenic valley with trekking trails), or Alibaug (beach town known for its forts).",
    },
    {
      id: 10,
      question: "What are some hidden gems in Mumbai?",
      answer:
        "Discover Mumbai's off-the-beaten-path treasures. Visit the Sanjay Gandhi National Park for wildlife spotting, explore the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya for ancient artifacts, or wander through the Khotachiwadi (colonial-era neighborhood).",
    },
    // **Pune** (continued)
    {
      id: 11,
      question: "What are some famous educational institutions in Pune?",
      answer:
        "Pune is renowned for its academic excellence. Explore institutions like Savitribai Phule Pune University, Fergusson College, Symbiosis International University, and College of Engineering Pune.",
    },
    {
      id: 12,
      question: "Is Pune known for any specific art forms?",
      answer:
        "Discover Pune's rich artistic heritage. The city is celebrated for its traditional handicrafts such as Paithani sarees, Kolhapuri chappals, Warli paintings, and Tambat Ali brassware.",
    },
    {
      id: 13,
      question: "What are some popular music venues in Pune?",
      answer:
        "Experience Pune's vibrant music scene. Attend concerts and performances at venues like Shisha Jazz Café, High Spirits, or Hard Rock Cafe for a memorable night out.",
    },
    {
      id: 14,
      question: "Are there any famous literary figures associated with Pune?",
      answer:
        "Pune has been home to renowned literary figures. Explore the works of poets like Keshavsut, Sant Tukaram, and Bahinabai Chaudhari, who have enriched Marathi literature.",
    },
    {
      id: 15,
      question:
        "What are some outdoor recreational activities available in Pune?",
      answer:
        "Embrace Pune's natural beauty and engage in outdoor activities. Enjoy trekking at Sinhagad Fort, paragliding at Kamshet, or boating at Khadakwasla Dam for an adventurous experience.",
    },
  
    // **Mumbai** (continued)
    {
      id: 16,
      question: "What transportation options are available in Mumbai?",
      answer:
        "Mumbai offers various transportation modes for easy commuting. Utilize the extensive suburban railway network (local trains), BEST buses, taxis, auto-rickshaws, metro, or app-based cab services like Uber and Ola.",
    },
    {
      id: 17,
      question: "How is Mumbai's street food scene?",
      answer:
        "Indulge in Mumbai's diverse street food offerings. Try iconic dishes like Vada Pav, Pav Bhaji, Bhel Puri, Sev Puri, Dabeli, and Mumbai-style Pani Puri for an explosion of flavors.",
    },
    {
      id: 18,
      question: "Are there any famous film studios in Mumbai?",
      answer:
        "Mumbai is the heart of the Indian film industry, Bollywood. Visit renowned film studios like Film City (Goregaon), Mehboob Studios (Bandra), or R.K. Studios (Chembur) to catch a glimpse of the movie-making process.",
    },
    {
      id: 19,
      question: "What are some popular cultural events in Mumbai?",
      answer:
        "Experience Mumbai's vibrant cultural scene through various events. Attend the Kala Ghoda Arts Festival, Mumbai International Film Festival (MIFF), NCPA Mumbai Dance Season, or the Elephanta Festival for a dose of art, music, and dance.",
    },
    {
      id: 20,
      question: "How does Mumbai celebrate New Year's Eve?",
      answer:
        "Welcome the New Year with grand celebrations in Mumbai. Join the revelry at iconic venues like Marine Drive, Gateway of India, Juhu Beach, or attend themed parties at luxury hotels and nightclubs across the city.",
    },
    {
      id: 21,
      question: "How does Mumbai celebrate festivals like Ganesh Chaturthi?",
      answer:
        "Experience the grandeur of festivals in Mumbai. Witness the spectacular Ganesh Chaturthi celebrations with elaborate processions, vibrant decorations, and the immersion of Ganesh idols in the Arabian Sea.",
    },
    {
      id: 22,
      question: "What are some famous street markets in Mumbai?",
      answer:
        "Explore Mumbai's bustling street markets for a unique shopping experience. Visit places like Colaba Causeway, Linking Road, Crawford Market, and Fashion Street for trendy fashion, accessories, and souvenirs.",
    },
    {
      id: 23,
      question:
        "Are there any famous landmarks in Mumbai associated with Bollywood?",
      answer:
        "Discover Mumbai's deep connection with Bollywood. Visit iconic landmarks like Mannat (Shah Rukh Khan's residence), Galaxy Apartments (Salman Khan's residence), or Film City (the heart of Bollywood film production).",
    },
    {
      id: 24,
      question: "What are some popular cultural festivals celebrated in Mumbai?",
      answer:
        "Experience Mumbai's cultural diversity through its festivals. Join the celebrations during Navratri, Eid, Christmas, Durga Puja, or the Mumbai International Film Festival (MIFF) for a colorful experience.",
    },
    {
      id: 25,
      question: "How does Mumbai celebrate Diwali?",
      answer:
        "Experience the festival of lights in Mumbai. Witness the city adorned with vibrant decorations, illuminated buildings, fireworks, and the exchange of sweets and gifts during the joyous occasion of Diwali.",
    },
  
    // **World** (continued)
    {
      id: 26,
      question: "What are some UNESCO World Heritage Sites worth visiting?",
      answer:
        "Explore the cultural and natural wonders designated as UNESCO World Heritage Sites. Visit places like the Taj Mahal (India), Petra (Jordan), Great Wall of China (China), Machu Picchu (Peru), and the Great Barrier Reef (Australia).",
    },
    {
      id: 27,
      question: "How does climate change affect tourist destinations?",
      answer:
        "Climate change poses significant challenges to tourist destinations worldwide. Learn about the impact of rising temperatures, sea-level rise, extreme weather events, and loss of biodiversity on iconic destinations and local communities.",
    },
    {
      id: 28,
      question: "What are some famous landmarks that have been lost to history?",
      answer:
        "Discover historical landmarks that have disappeared over time. Explore places like the Library of Alexandria (Egypt), the Colossus of Rhodes (Greece), the Hanging Gardens of Babylon (Iraq), or the ancient city of Pompeii (Italy).",
    },
    {
      id: 29,
      question: "What are some popular adventure sports destinations?",
      answer:
        "Embark on thrilling adventures in destinations known for their adrenaline-pumping activities. Visit places like Queenstown (New Zealand) for bungee jumping, Interlaken (Switzerland) for skydiving, or Moab (USA) for rock climbing and mountain biking.",
    },
    {
      id: 30,
      question: "How does ecotourism contribute to conservation efforts?",
      answer:
        "Discover the role of ecotourism in promoting conservation and sustainable development. Learn how responsible tourism practices support local communities, protect wildlife habitats, and preserve fragile ecosystems in destinations around the world.",
    },
  
    {
      id: 31,
      question: "What are some famous festivals celebrated around the world?",
      answer:
        "Experience the diversity of global festivals. Join celebrations like Carnival in Rio de Janeiro (Brazil), Mardi Gras in New Orleans (USA), La Tomatina in Bunol (Spain), Oktoberfest in Munich (Germany), or the Lantern Festival in Pingxi (Taiwan).",
    },
    {
      id: 32,
      question: "How do different cultures celebrate weddings?",
      answer:
        "Explore wedding traditions around the world. Learn about customs like Indian weddings with vibrant ceremonies and rituals, Japanese weddings with Shinto traditions, or Western weddings with customs like exchanging vows and rings.",
    },
    {
      id: 33,
      question: "What are some famous landmarks in Europe?",
      answer:
        "Europe is home to iconic landmarks that attract millions of visitors each year. Explore landmarks like the Eiffel Tower (France), Colosseum (Italy), Big Ben (UK), Sagrada Familia (Spain), and the Acropolis (Greece).",
    },
    {
      id: 34,
      question: "Which countries offer the best culinary experiences?",
      answer:
        "Indulge in diverse culinary delights around the world. Explore the culinary scenes of countries like Italy for pasta and pizza, Japan for sushi and ramen, Thailand for spicy curries, France for gourmet cuisine, and Mexico for tacos and tamales.",
    },
    {
      id: 35,
      question: "What are some famous pilgrimage sites?",
      answer:
        "Embark on spiritual journeys to renowned pilgrimage sites. Visit places like Mecca (Saudi Arabia) for Muslims, Jerusalem (Israel) for Christians, Buddhists, and Jews, Varanasi (India) for Hindus, or Lourdes (France) for Catholic pilgrims.",
    },
    {
      id: 36,
      question: "How do different cultures celebrate New Year's Eve?",
      answer:
        "Experience diverse New Year's Eve traditions around the world. Witness fireworks over the Sydney Harbour (Australia), the ball drop in Times Square (USA), Hogmanay celebrations in Edinburgh (Scotland), or lantern releases in Thailand.",
    },
    {
      id: 37,
      question: "What are some famous ancient ruins to explore?",
      answer:
        "Step back in time and explore ancient civilizations through their ruins. Visit archaeological sites like Petra (Jordan), Machu Picchu (Peru), Angkor Wat (Cambodia), the Roman Forum (Italy), or Tikal (Guatemala).",
    },
    {
      id: 38,
      question: "Which cities are known for their street art?",
      answer:
        "Discover vibrant street art scenes in cities around the world. Explore neighborhoods like Wynwood in Miami (USA), Shoreditch in London (UK), Berlin (Germany), Valparaiso (Chile), or Melbourne (Australia) for colorful murals and graffiti.",
    },
    {
      id: 39,
      question: "What are some UNESCO Creative Cities known for their crafts?",
      answer:
        "Explore cities recognized by UNESCO for their creative industries. Visit places like Jaipur (India) for its craftsmanship, Santa Fe (USA) for folk art and design, Aswan (Egypt) for crafts and folk art, or Hangzhou (China) for crafts and folk art.",
    },
    {
      id: 40,
      question: "How do different cultures celebrate coming-of-age ceremonies?",
      answer:
        "Learn about unique coming-of-age ceremonies around the world. Discover traditions like the Bar and Bat Mitzvah (Jewish), Quinceañera (Latin American), Seijin Shiki (Japanese), or the Hindu Upanayana ceremony.",
    },
  ];
  
  export default data;
  