const questions = [
  {
    "num": 1,
    "question_en": "Who is the author of 'What is Wrong with Indian Film'?",
    "options_en": ["Satyajit Ray", "Ritwik Ghatak", "Mrinal Sen", "Guru Dutt"],
    "answer_en": "Satyajit Ray",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the primary focus of Ray's essay?",
    "options_en": ["Critiquing flaws in Indian cinema", "Praising Bollywood success", "Comparing Indian and Hollywood films", "History of Indian cinema"],
    "answer_en": "Critiquing flaws in Indian cinema",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does Ray criticize about song sequences in Indian films?",
    "options_en": ["They disrupt narrative flow", "They are poorly composed", "They are too short", "They lack variety"],
    "answer_en": "They disrupt narrative flow",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "According to Ray, what is missing in Indian film acting?",
    "options_en": ["Naturalism and subtlety", "Emotional expression", "Physicality", "Vocal projection"],
    "answer_en": "Naturalism and subtlety",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What film movement does Ray admire?",
    "options_en": ["Italian Neorealism", "French New Wave", "German Expressionism", "Hollywood Golden Age"],
    "answer_en": "Italian Neorealism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does Ray say about Indian film sets?",
    "options_en": ["They look artificial and studio-bound", "They are too expensive", "They are poorly designed", "They lack color"],
    "answer_en": "They look artificial and studio-bound",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What aspect of filmmaking does Ray emphasize most?",
    "options_en": ["Visual storytelling", "Musical numbers", "Star power", "Dialogue delivery"],
    "answer_en": "Visual storytelling",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does Ray criticize about Indian film dialogue?",
    "options_en": ["It's theatrical and exaggerated", "It's too simple", "It's in English", "It's too philosophical"],
    "answer_en": "It's theatrical and exaggerated",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What should films primarily reflect according to Ray?",
    "options_en": ["Authentic Indian reality", "Fantasy worlds", "Foreign cultures", "Historical events only"],
    "answer_en": "Authentic Indian reality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does Ray say about dance sequences?",
    "options_en": ["They are often irrelevant to plot", "They are beautifully choreographed", "They need more innovation", "They should be eliminated"],
    "answer_en": "They are often irrelevant to plot",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which foreign filmmaker influenced Ray's thinking?",
    "options_en": ["Jean Renoir", "Alfred Hitchcock", "Federico Fellini", "Akira Kurosawa"],
    "answer_en": "Jean Renoir",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does Ray say about film music's role?",
    "options_en": ["Should serve the narrative", "Should be commercially popular", "Should dominate the film", "Should be Western style"],
    "answer_en": "Should serve the narrative",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What commercial aspect does Ray criticize?",
    "options_en": ["Star system dominating content", "Low budgets", "Lack of marketing", "Too many theaters"],
    "answer_en": "Star system dominating content",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does Ray emphasize about location shooting?",
    "options_en": ["Adds authenticity and realism", "Is more expensive", "Is logistically difficult", "Should be avoided"],
    "answer_en": "Adds authenticity and realism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does Ray criticize about Indian film plots?",
    "options_en": ["Formulaic and predictable", "Too complex", "Lack conflict", "Are too short"],
    "answer_en": "Formulaic and predictable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does Ray say about imitation of Hollywood?",
    "options_en": ["Creates inauthentic cinema", "Improves quality", "Is necessary for success", "Should be encouraged"],
    "answer_en": "Creates inauthentic cinema",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does Ray advocate for in film education?",
    "options_en": ["Proper film schools and training", "Learning on the job only", "Foreign education exclusively", "No formal education needed"],
    "answer_en": "Proper film schools and training",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does Ray criticize about film editing?",
    "options_en": ["Poor pacing and rhythm", "Too many cuts", "Too conservative", "Lacks innovation"],
    "answer_en": "Poor pacing and rhythm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What does Ray say about audience expectations?",
    "options_en": ["Limit artistic creativity", "Guide filmmakers properly", "Are always correct", "Should be ignored completely"],
    "answer_en": "Limit artistic creativity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does Ray emphasize about cinematography?",
    "options_en": ["Should be expressive and meaningful", "Should be showy and flashy", "Should be invisible", "Should follow Hollywood style"],
    "answer_en": "Should be expressive and meaningful",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What does Ray criticize about melodrama?",
    "options_en": ["Replaces genuine emotion", "Is essential for Indian cinema", "Is underused", "Should be increased"],
    "answer_en": "Replaces genuine emotion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What social approach does Ray advocate?",
    "options_en": ["Realistic treatment of social issues", "Avoiding social issues", "Exaggerated treatment", "Only happy endings"],
    "answer_en": "Realistic treatment of social issues",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What does Ray say about character development?",
    "options_en": ["Characters are stereotypical", "Characters are well-developed", "Characters are too complex", "No characters needed"],
    "answer_en": "Characters are stereotypical",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does Ray emphasize about sound design?",
    "options_en": ["Should be naturalistic", "Should be dramatic", "Should have lots of music", "Is unimportant"],
    "answer_en": "Should be naturalistic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What does Ray criticize about film endings?",
    "options_en": ["Often unrealistic and contrived", "Too abrupt", "Too philosophical", "Lack closure"],
    "answer_en": "Often unrealistic and contrived",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does Ray say about film producers?",
    "options_en": ["Interfere too much creatively", "Provide necessary guidance", "Are absent", "Are perfect partners"],
    "answer_en": "Interfere too much creatively",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does Ray appreciate about regional cinema?",
    "options_en": ["Greater authenticity", "Better production values", "More stars", "Bigger budgets"],
    "answer_en": "Greater authenticity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does Ray criticize about film distribution?",
    "options_en": ["Favors only commercial films", "Is perfectly balanced", "Doesn't exist", "Is too limited"],
    "answer_en": "Favors only commercial films",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What does Ray say about film technicians?",
    "options_en": ["Need better training", "Are world-class", "Are overpaid", "Should be eliminated"],
    "answer_en": "Need better training",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What perspective does Ray have on film as art?",
    "options_en": ["Should be treated as serious art", "Is only entertainment", "Is purely commercial", "Is not important"],
    "answer_en": "Should be treated as serious art",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does Ray criticize about censorship?",
    "options_en": ["Restricts creative freedom", "Protects audiences", "Is necessary", "Doesn't exist"],
    "answer_en": "Restricts creative freedom",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does Ray say about film festivals?",
    "options_en": ["Important for exposure and growth", "Are useless", "Damage Indian cinema", "Should be avoided"],
    "answer_en": "Important for exposure and growth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What does Ray emphasize about film criticism?",
    "options_en": ["Should be constructive and informed", "Should be only positive", "Is unnecessary", "Should be harsh"],
    "answer_en": "Should be constructive and informed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does Ray criticize about film budgets?",
    "options_en": ["Misallocation to stars over content", "Are too small", "Are perfectly allocated", "Don't matter"],
    "answer_en": "Misallocation to stars over content",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What does Ray say about film genres?",
    "options_en": ["Should not limit creativity", "Are essential", "Don't exist in India", "Should be strictly followed"],
    "answer_en": "Should not limit creativity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does Ray believe about film's power?",
    "options_en": ["Can drive social change", "Is only entertainment", "Is dangerous", "Is overrated"],
    "answer_en": "Can drive social change",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does Ray criticize about film marketing?",
    "options_en": ["Emphasizes wrong elements", "Is perfect", "Doesn't exist", "Should be eliminated"],
    "answer_en": "Emphasizes wrong elements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does Ray advocate for independent cinema?",
    "options_en": ["Should be encouraged and supported", "Is useless", "Hurts the industry", "Should be banned"],
    "answer_en": "Should be encouraged and supported",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does Ray emphasize about film continuity?",
    "options_en": ["Is often poorly maintained", "Is perfect in Indian films", "Doesn't matter", "Is too strict"],
    "answer_en": "Is often poorly maintained",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does Ray criticize about film awards?",
    "options_en": ["Reward wrong achievements", "Are perfectly judged", "Don't exist", "Should be eliminated"],
    "answer_en": "Reward wrong achievements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What does Ray say about literary adaptations?",
    "options_en": ["Should balance faithfulness and creativity", "Should copy exactly", "Should be avoided", "Are always bad"],
    "answer_en": "Should balance faithfulness and creativity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does Ray emphasize about film tempo?",
    "options_en": ["Should match narrative needs", "Should always be fast", "Should always be slow", "Is unimportant"],
    "answer_en": "Should match narrative needs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What does Ray criticize about theater conditions?",
    "options_en": ["Are often poor and uncomfortable", "Are excellent", "Don't exist", "Are luxurious"],
    "answer_en": "Are often poor and uncomfortable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does Ray say about film preservation?",
    "options_en": ["Heritage should be preserved", "Old films don't matter", "Is happening perfectly", "Is too expensive"],
    "answer_en": "Heritage should be preserved",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does Ray emphasize about film research?",
    "options_en": ["Is lacking in Indian cinema", "Is excessive", "Doesn't exist", "Is perfect"],
    "answer_en": "Is lacking in Indian cinema",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does Ray criticize about film journalism?",
    "options_en": ["Focuses on gossip over analysis", "Is too serious", "Doesn't exist", "Is perfect"],
    "answer_en": "Focuses on gossip over analysis",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What can films learn from literature according to Ray?",
    "options_en": ["Character depth and narrative structure", "Nothing", "Should copy directly", "Are superior to literature"],
    "answer_en": "Character depth and narrative structure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does Ray emphasize about visual composition?",
    "options_en": ["Should be carefully planned", "Happens by accident", "Is unimportant", "Should be spontaneous"],
    "answer_en": "Should be carefully planned",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What does Ray criticize about film publicity?",
    "options_en": ["Creates false expectations", "Is perfectly accurate", "Doesn't exist", "Should be increased"],
    "answer_en": "Creates false expectations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does Ray say about film vs theater?",
    "options_en": ["Film is a distinct medium", "They are identical", "Theater is superior", "Film should copy theater"],
    "answer_en": "Film is a distinct medium",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What does Ray emphasize about lighting?",
    "options_en": ["Should be natural and expressive", "Should be dramatic always", "Is unimportant", "Should be minimal"],
    "answer_en": "Should be natural and expressive",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does Ray criticize about film remakes?",
    "options_en": ["Lack originality and creativity", "Improve originals", "Don't exist", "Are necessary"],
    "answer_en": "Lack originality and creativity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What does Ray believe about film and reality?",
    "options_en": ["Should reflect authentic reality", "Should escape reality", "Have no connection", "Create new reality"],
    "answer_en": "Should reflect authentic reality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What does Ray emphasize about film rhythm?",
    "options_en": ["Is essential for good filmmaking", "Is unimportant", "Happens automatically", "Should be avoided"],
    "answer_en": "Is essential for good filmmaking",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does Ray criticize about imitation in cinema?",
    "options_en": ["Shows lack of original vision", "Is good practice", "Doesn't happen", "Should be encouraged"],
    "answer_en": "Shows lack of original vision",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What can film learn from painting according to Ray?",
    "options_en": ["Visual composition and framing", "Nothing", "Should copy directly", "Are unrelated arts"],
    "answer_en": "Visual composition and framing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What does Ray emphasize about narrative structure?",
    "options_en": ["Should be organic to story", "Should follow formulas", "Is unimportant", "Should be complex always"],
    "answer_en": "Should be organic to story",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What does Ray criticize about film franchises?",
    "options_en": ["Prioritize profit over artistry", "Are creatively satisfying", "Don't exist", "Help cinema grow"],
    "answer_en": "Prioritize profit over artistry",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What does Ray believe about film music's relationship to film?",
    "options_en": ["Should support and enhance film", "Should dominate film", "No relationship", "Always conflicts"],
    "answer_en": "Should support and enhance film",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What does Ray emphasize about visual perspective?",
    "options_en": ["Should be consistent and purposeful", "Should change constantly", "Is unimportant", "Should confuse viewers"],
    "answer_en": "Should be consistent and purposeful",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What does Ray criticize about film sequels?",
    "options_en": ["Are usually commercial ventures", "Improve original stories", "Don't exist", "Are necessary"],
    "answer_en": "Are usually commercial ventures",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does Ray say about film and photography?",
    "options_en": ["Film is extended photography", "No relationship", "Photography is superior", "Film damages photography"],
    "answer_en": "Film is extended photography",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What does Ray emphasize about tonal consistency?",
    "options_en": ["Essential for coherent film", "Should vary constantly", "Is unimportant", "Should be broken deliberately"],
    "answer_en": "Essential for coherent film",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What does Ray criticize about film merchandise?",
    "options_en": ["Commercializes artistic endeavor", "Supports film industry", "Doesn't exist", "Should be expanded"],
    "answer_en": "Commercializes artistic endeavor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What does Ray say about film and sculpture?",
    "options_en": ["Both work with form and space", "No relationship", "Sculpture is superior", "Film copies sculpture"],
    "answer_en": "Both work with form and space",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What does Ray emphasize about creating mood?",
    "options_en": ["Requires careful artistic choices", "Happens by accident", "Is unimportant", "Should be avoided"],
    "answer_en": "Requires careful artistic choices",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What does Ray criticize about film promotions?",
    "options_en": ["Often misrepresent actual film", "Accurately represent films", "Don't exist", "Are too minimal"],
    "answer_en": "Often misrepresent actual film",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What does Ray say about film and architecture?",
    "options_en": ["Both creatively use space", "No relationship", "Architecture is superior", "Film copies architecture"],
    "answer_en": "Both creatively use space",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What does Ray emphasize about authentic atmosphere?",
    "options_en": ["Essential for believable film", "Should be fantastical", "Is unimportant", "Should be dark always"],
    "answer_en": "Essential for believable film",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What does Ray criticize about film sponsors?",
    "options_en": ["Influence creative decisions", "Provide needed support", "Don't exist", "Should increase involvement"],
    "answer_en": "Influence creative decisions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What does Ray say about dance in films?",
    "options_en": ["Should serve narrative purpose", "Should dominate films", "No place in film", "Should be realistic only"],
    "answer_en": "Should serve narrative purpose",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does Ray emphasize about visual texture?",
    "options_en": ["Adds depth and richness", "Is unimportant", "Happens automatically", "Should be avoided"],
    "answer_en": "Adds depth and richness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What does Ray criticize about film rating systems?",
    "options_en": ["Are often arbitrary and inconsistent", "Are perfectly fair", "Don't exist", "Should be eliminated"],
    "answer_en": "Are often arbitrary and inconsistent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What does Ray believe about film and poetry?",
    "options_en": ["Film can have poetic quality", "Film should avoid poetry", "No relationship", "Poetry damages film"],
    "answer_en": "Film can have poetic quality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What does Ray emphasize about artistic harmony?",
    "options_en": ["All elements should work together", "Elements should clash", "Is unimportant", "Happens naturally"],
    "answer_en": "All elements should work together",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What does Ray criticize about film committees?",
    "options_en": ["Stifle individual creativity", "Provide valuable guidance", "Don't exist", "Should have more power"],
    "answer_en": "Stifle individual creativity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What does Ray say about film's unique language?",
    "options_en": ["Film has its own visual language", "Should copy literary language", "Has no language", "Should use only images"],
    "answer_en": "Film has its own visual language",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What does Ray emphasize about artistic unity?",
    "options_en": ["Essential for quality film", "Is unimportant", "Happens automatically", "Should be avoided"],
    "answer_en": "Essential for quality film",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What does Ray criticize about film associations?",
    "options_en": ["Protect mediocrity and status quo", "Promote excellence", "Don't exist", "Should have more power"],
    "answer_en": "Protect mediocrity and status quo",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What does Ray say about film vs television?",
    "options_en": ["Film is distinct art form", "They are identical", "TV is superior", "Film should copy TV"],
    "answer_en": "Film is distinct art form",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What does Ray emphasize about narrative coherence?",
    "options_en": ["Makes film comprehensible", "Is unimportant", "Confuses audiences", "Should be avoided"],
    "answer_en": "Makes film comprehensible",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What does Ray criticize about film unions?",
    "options_en": ["Resist necessary changes", "Promote progress", "Don't exist", "Should have more power"],
    "answer_en": "Resist necessary changes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What can film learn from documentaries according to Ray?",
    "options_en": ["Realism and authenticity", "Nothing", "Should avoid documentary style", "Documentaries are inferior"],
    "answer_en": "Realism and authenticity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What does Ray emphasize about clear communication?",
    "options_en": ["Essential for effective film", "Is unimportant", "Makes film boring", "Should be avoided"],
    "answer_en": "Essential for effective film",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What does Ray criticize about rigid traditions?",
    "options_en": ["Become limiting formulas", "Provide valuable guidance", "Don't exist", "Should be strictly followed"],
    "answer_en": "Become limiting formulas",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What does Ray say about animation principles?",
    "options_en": ["Same principles apply as live action", "Different principles", "Animation is inferior", "Film should avoid animation"],
    "answer_en": "Same principles apply as live action",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What does Ray emphasize about technical precision?",
    "options_en": ["Shows professional competence", "Is unimportant", "Limits creativity", "Should be avoided"],
    "answer_en": "Shows professional competence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What does Ray criticize about cinematic conventions?",
    "options_en": ["Limit innovation and creativity", "Help audience understanding", "Don't exist", "Should be strictly followed"],
    "answer_en": "Limit innovation and creativity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What can be learned from short films according to Ray?",
    "options_en": ["Narrative economy and precision", "Nothing", "Short films are useless", "Only features matter"],
    "answer_en": "Narrative economy and precision",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What does Ray emphasize about artistic discipline?",
    "options_en": ["Essential for quality art", "Limits creativity", "Is unnecessary", "Should be avoided"],
    "answer_en": "Essential for quality art",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What does Ray criticize about formulaic filmmaking?",
    "options_en": ["Produces identical, uninspired films", "Ensures commercial success", "Doesn't exist", "Is necessary"],
    "answer_en": "Produces identical, uninspired films",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What does Ray say about experimental cinema?",
    "options_en": ["Pushes artistic boundaries", "Is useless", "No value", "Damages cinema"],
    "answer_en": "Pushes artistic boundaries",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What does Ray emphasize about craftsmanship?",
    "options_en": ["Foundation of artistic achievement", "Is unimportant", "Limits expression", "Should be avoided"],
    "answer_en": "Foundation of artistic achievement",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What does Ray criticize about following trends?",
    "options_en": ["Encourages unoriginal copying", "Shows industry progress", "Doesn't happen", "Should be encouraged"],
    "answer_en": "Encourages unoriginal copying",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What does Ray believe about avant-garde cinema?",
    "options_en": ["Explores new possibilities", "Is confusing and pointless", "No value", "Destroys traditional cinema"],
    "answer_en": "Explores new possibilities",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is Ray's view on film length?",
    "options_en": ["Should be dictated by story needs", "Should always be 3 hours", "Should be short always", "Doesn't matter"],
    "answer_en": "Should be dictated by story needs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What does Ray say about music directors' influence?",
    "options_en": ["Often dominates over directors", "Is perfectly balanced", "Doesn't exist", "Should increase"],
    "answer_en": "Often dominates over directors",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What does Ray emphasize about cultural authenticity?",
    "options_en": ["Essential for meaningful cinema", "Is unimportant", "Limits appeal", "Should be avoided"],
    "answer_en": "Essential for meaningful cinema",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What does Ray criticize about industry nepotism?",
    "options_en": ["Limits fresh talent and ideas", "Maintains quality", "Doesn't exist", "Should be encouraged"],
    "answer_en": "Limits fresh talent and ideas",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is Ray's fundamental message in the essay?",
    "options_en": ["Indian cinema needs artistic reform and authenticity", "Indian cinema is perfect as it is", "Indian cinema should copy Western models", "Indian cinema should focus only on entertainment"],
    "answer_en": "Indian cinema needs artistic reform and authenticity",
    "attempted": false,
    "selected": ""
  }
];
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");

        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};