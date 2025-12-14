const questions = [
  {
    "num": 1,
    "question_en": "What prestigious award was Martin Luther King Jr. accepting in his 1964 speech?",
    "options_en": ["Nobel Peace Prize", "Presidential Medal of Freedom", "Pulitzer Prize", "Congressional Gold Medal"],
    "answer_en": "Nobel Peace Prize",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which country's capital hosted the ceremony where King delivered this speech?",
    "options_en": ["Norway", "Sweden", "United States", "Switzerland"],
    "answer_en": "Norway",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What was King's age when he became the youngest Peace Prize laureate at that time?",
    "options_en": ["35", "40", "30", "45"],
    "answer_en": "35",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "King said he accepted the award on behalf of which movement?",
    "options_en": ["Nonviolent civil rights movement", "Black Power movement", "Labor union movement", "Anti-war movement"],
    "answer_en": "Nonviolent civil rights movement",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What phrase did King use to describe someone who leads the fight for justice?",
    "options_en": ["Drum major for justice", "Captain of freedom", "General of equality", "Leader of liberation"],
    "answer_en": "Drum major for justice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What did King call 'the privilege of a lifetime'?",
    "options_en": ["Working for what you believe in", "Receiving the Nobel Prize", "Leading the civil rights movement", "Speaking to world leaders"],
    "answer_en": "Working for what you believe in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What did King say was 'more honorable than to be served'?",
    "options_en": ["To serve", "To lead", "To win", "To give"],
    "answer_en": "To serve",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What three problems did King say remained despite technological progress?",
    "options_en": ["Poverty, racism, and war", "Hunger, disease, and ignorance", "Corruption, greed, and violence", "Inequality, pollution, and conflict"],
    "answer_en": "Poverty, racism, and war",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What architectural metaphor did King use for civilization?",
    "options_en": ["A temple", "A palace", "A fortress", "A bridge"],
    "answer_en": "A temple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What did King say must be substituted for 'the corroding words of violence'?",
    "options_en": ["Words of love and peace", "Words of protest", "Words of warning", "Words of unity"],
    "answer_en": "Words of love and peace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What did King call the 'moral axis of the universe'?",
    "options_en": ["Justice", "Love", "Truth", "Freedom"],
    "answer_en": "Justice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What famous quote about justice did King reference in his speech?",
    "options_en": ["The arc of the moral universe is long but bends toward justice", "Justice delayed is justice denied", "Equal justice under law", "Injustice anywhere is a threat to justice everywhere"],
    "answer_en": "The arc of the moral universe is long but bends toward justice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What musical metaphor did King use for transforming human conflict?",
    "options_en": ["Turning jangling discords into a beautiful symphony", "Changing cacophony to harmony", "Making noise into music", "Transforming chaos into order"],
    "answer_en": "Turning jangling discords into a beautiful symphony",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What did King say he refused to believe about the 'bank of justice'?",
    "options_en": ["That it is bankrupt", "That it is overflowing", "That it is inaccessible", "That it is corrupt"],
    "answer_en": "That it is bankrupt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What did King say must be 'proscribed' worldwide?",
    "options_en": ["The notion of racial superiority", "All weapons", "Political oppression", "Economic exploitation"],
    "answer_en": "The notion of racial superiority",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What did King say must be 'stamped out' internationally?",
    "options_en": ["The last vestiges of racism", "All governments", "Traditional cultures", "Religious differences"],
    "answer_en": "The last vestiges of racism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What did King say must be 'curbed' for humanity's survival?",
    "options_en": ["The destructive power of nuclear weapons", "Economic growth", "Population increase", "Technological development"],
    "answer_en": "The destructive power of nuclear weapons",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What did King say the rich nations must do for poor nations?",
    "options_en": ["Bridge the economic gap", "Ignore their problems", "Give them loans", "Teach them democracy"],
    "answer_en": "Bridge the economic gap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What did King say people have 'unlocked' but not 'unclosed'?",
    "options_en": ["The doors of opportunity", "Their hearts", "Government buildings", "Bank vaults"],
    "answer_en": "The doors of opportunity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What did King say was 'still a lonely island'?",
    "options_en": ["Poverty in a sea of prosperity", "His home in society", "America in the world", "The civil rights movement"],
    "answer_en": "Poverty in a sea of prosperity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What did King say 'still lives in a corner of American society'?",
    "options_en": ["The Negro", "The immigrant", "The poor", "The disabled"],
    "answer_en": "The Negro",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What did King say was 'still an affidavit' to inequality?",
    "options_en": ["The life of the Negro", "Government policies", "Economic statistics", "International relations"],
    "answer_en": "The life of the Negro",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What did King say was the 'Negro's basic mobility'?",
    "options_en": ["From a smaller ghetto to a larger one", "From poverty to middle class", "From South to North", "From rural to urban"],
    "answer_en": "From a smaller ghetto to a larger one",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What did King say 'surrounds the Negro' in American society?",
    "options_en": ["A wall of prejudice", "Opportunities", "Supporters", "Wealth"],
    "answer_en": "A wall of prejudice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What did King say was 'still the Negro's burden'?",
    "options_en": ["The heaviness of discrimination", "Economic responsibility", "Political duty", "Social expectation"],
    "answer_en": "The heaviness of discrimination",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What did King say was 'still the Negro's shame'?",
    "options_en": ["The identity crisis of not being white", "Poverty", "Lack of education", "Political powerlessness"],
    "answer_en": "The identity crisis of not being white",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What did King say he would 'keep burning'?",
    "options_en": ["The torch of nonviolence", "Anger against oppressors", "The flame of revolution", "Hope for change"],
    "answer_en": "The torch of nonviolence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What did King say he would 'guard against'?",
    "options_en": ["The paralysis of crippling fear", "Political enemies", "Economic problems", "International criticism"],
    "answer_en": "The paralysis of crippling fear",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What did King say he would 'continue to' in the struggle?",
    "options_en": ["Work with faith", "Fight with weapons", "Compromise with opponents", "Ignore criticism"],
    "answer_en": "Work with faith",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What mountain did King metaphorically refer to?",
    "options_en": ["The mountain of despair", "The mountain of power", "The mountain of wealth", "The mountain of fame"],
    "answer_en": "The mountain of despair",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What stone did King metaphorically refer to?",
    "options_en": ["The stone of hope", "The stone of justice", "The stone of freedom", "The stone of peace"],
    "answer_en": "The stone of hope",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What did King say would 'speed up' the coming of?",
    "options_en": ["The day of universal brotherhood", "Technological progress", "Economic equality", "Political freedom"],
    "answer_en": "The day of universal brotherhood",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What did King say was the 'foundation' of his metaphorical temple?",
    "options_en": ["Truth", "Love", "Justice", "Freedom"],
    "answer_en": "Truth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What did King say was the 'cornerstone' of his metaphorical temple?",
    "options_en": ["Love", "Justice", "Truth", "Peace"],
    "answer_en": "Love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What did King say was the 'roof' of his metaphorical temple?",
    "options_en": ["Brotherhood", "Security", "Wealth", "Power"],
    "answer_en": "Brotherhood",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What did King say must be 'found' for war?",
    "options_en": ["An alternative", "More funding", "Better weapons", "Stronger leaders"],
    "answer_en": "An alternative",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What did King say must be 'bridged' between nations?",
    "options_en": ["The gulf between rich and poor", "Cultural differences", "Religious divides", "Political ideologies"],
    "answer_en": "The gulf between rich and poor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What did King say he refused to accept as 'the final response'?",
    "options_en": ["Despair", "Violence", "Injustice", "Oppression"],
    "answer_en": "Despair",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What did King say there was 'still' in the world?",
    "options_en": ["Hope for a brighter tomorrow", "Time for change", "Money for development", "Space for expansion"],
    "answer_en": "Hope for a brighter tomorrow",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What did King say would be 'the day of' for all God's children?",
    "options_en": ["Man as man", "Peace and prosperity", "Economic equality", "Political freedom"],
    "answer_en": "Man as man",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What did King say would be 'crowned with glory'?",
    "options_en": ["That day when all men recognize their brotherhood", "The Nobel ceremony", "His personal achievements", "American democracy"],
    "answer_en": "That day when all men recognize their brotherhood",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What did King say was 'not some pious expression'?",
    "options_en": ["The belief in the dignity of all men", "The Nobel Prize award", "His speech", "The civil rights movement"],
    "answer_en": "The belief in the dignity of all men",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What did King say had 'special meaning' because of the struggle?",
    "options_en": ["The award", "His life", "American history", "World politics"],
    "answer_en": "The award",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What did King say was the civil rights movement's commitment?",
    "options_en": ["To nonviolence", "To political power", "To economic reform", "To separation"],
    "answer_en": "To nonviolence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What did King say was 'more honorable' than receiving honors?",
    "options_en": ["Deserving them", "Giving them", "Refusing them", "Sharing them"],
    "answer_en": "Deserving them",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What did King say 'truth and love' will have?",
    "options_en": ["The final word", "No effect", "Limited power", "To compromise"],
    "answer_en": "The final word",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What did King say he believed was 'unarmed truth'?",
    "options_en": ["Unconditional love", "Military strength", "Economic power", "Political influence"],
    "answer_en": "Unconditional love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What did King say would 'transform dark yesterdays'?",
    "options_en": ["Bright tomorrows", "Forgotten memories", "Political change", "Economic growth"],
    "answer_en": "Bright tomorrows",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What did King say the award was 'above and beyond'?",
    "options_en": ["His personal accomplishments", "His family's expectations", "His country's achievements", "His organization's goals"],
    "answer_en": "His personal accomplishments",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What did King say was 'not yet' for African Americans?",
    "options_en": ["Freedom's full day", "Economic equality", "Political power", "Social acceptance"],
    "answer_en": "Freedom's full day",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What did King say 'still stalks' the land?",
    "options_en": ["The fatigue of despair", "Economic prosperity", "Political stability", "Social harmony"],
    "answer_en": "The fatigue of despair",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What did King say civilization possessed to end poverty?",
    "options_en": ["The resources", "The will", "The knowledge", "The power"],
    "answer_en": "The resources",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What did King say people lived in despite overall prosperity?",
    "options_en": ["Islands of poverty", "Cities of wealth", "Countries of peace", "Communities of harmony"],
    "answer_en": "Islands of poverty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What did King say nations still engaged in?",
    "options_en": ["Military conflicts", "Economic cooperation", "Cultural exchange", "Scientific research"],
    "answer_en": "Military conflicts",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What did King say must be substituted for violence?",
    "options_en": ["An escalation of nonviolence", "Political negotiation", "Economic pressure", "International law"],
    "answer_en": "An escalation of nonviolence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What did King say must be substituted for war?",
    "options_en": ["Peaceful coexistence", "Economic competition", "Political alliance", "Cultural understanding"],
    "answer_en": "Peaceful coexistence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What did King say must be substituted for hatred?",
    "options_en": ["Love", "Indifference", "Tolerance", "Understanding"],
    "answer_en": "Love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What did King say must be substituted for revenge?",
    "options_en": ["Reconciliation", "Justice", "Forgiveness", "Compensation"],
    "answer_en": "Reconciliation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What did King say must be substituted for aggression?",
    "options_en": ["Nonviolent resistance", "Passive acceptance", "Armed defense", "Political protest"],
    "answer_en": "Nonviolent resistance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What did King say was 'not yet' for the oppressed?",
    "options_en": ["The bright day of justice", "Economic opportunity", "Political representation", "Social acceptance"],
    "answer_en": "The bright day of justice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What did King say he would 'continue to' despite difficulties?",
    "options_en": ["Work with hope", "Fight with weapons", "Protest violently", "Compromise principles"],
    "answer_en": "Work with hope",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What did King say he would 'continue to' in the face of obstacles?",
    "options_en": ["Keep moving forward", "Retreat and regroup", "Wait for help", "Change direction"],
    "answer_en": "Keep moving forward",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What did King say he would 'continue to' with faith?",
    "options_en": ["Climb the mountain of despair", "Fight the enemy", "Build economic power", "Seek political office"],
    "answer_en": "Climb the mountain of despair",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What did King say he would 'continue to' with determination?",
    "options_en": ["Carve a stone of hope", "Build weapons", "Gather wealth", "Seek revenge"],
    "answer_en": "Carve a stone of hope",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What did King say would be 'crowned with glory'?",
    "options_en": ["The day of universal brotherhood", "The Nobel ceremony", "His personal success", "American democracy"],
    "answer_en": "The day of universal brotherhood",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What did King say would 'speed up' the coming of brotherhood?",
    "options_en": ["That day when all men recognize their brotherhood", "Technological progress", "Economic equality", "Political freedom"],
    "answer_en": "That day when all men recognize their brotherhood",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What materials did King say built the 'temple of civilization'?",
    "options_en": ["Justice and love", "Bricks and mortar", "Gold and silver", "Books and ideas"],
    "answer_en": "Justice and love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What did King say was the notion that must be 'proscribed' worldwide?",
    "options_en": ["That different races are inherently superior or inferior", "All religions", "Different cultures", "Economic systems"],
    "answer_en": "That different races are inherently superior or inferior",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What did King say must be 'stamped out' completely?",
    "options_en": ["The last vestiges of racial injustice", "All governments", "Traditional values", "Cultural differences"],
    "answer_en": "The last vestiges of racial injustice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What did King say must be 'curbed' to ensure survival?",
    "options_en": ["The destructive power of nuclear weapons", "Economic growth", "Technological progress", "Political dissent"],
    "answer_en": "The destructive power of nuclear weapons",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What did King say must be 'found' to replace war?",
    "options_en": ["An alternative", "More funding", "Better weapons", "Stronger leaders"],
    "answer_en": "An alternative",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What did King say must be 'bridged' globally?",
    "options_en": ["The gulf between rich and poor nations", "Cultural differences", "Religious divides", "Political ideologies"],
    "answer_en": "The gulf between rich and poor nations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What did King say must be 'unclosed' for all people?",
    "options_en": ["The doors of opportunity", "Government offices", "Bank vaults", "Prison gates"],
    "answer_en": "The doors of opportunity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What did King say was 'still a lonely island' in society?",
    "options_en": ["The life of the poor amid prosperity", "His own experience", "The Nobel committee", "The civil rights movement"],
    "answer_en": "The life of the poor amid prosperity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What did King say 'still lives in a corner' of society?",
    "options_en": ["The Negro in American society", "The immigrant in Europe", "The poor in rich countries", "The disabled in society"],
    "answer_en": "The Negro in American society",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What did King say was 'still an affidavit' to society's failure?",
    "options_en": ["The life of the Negro to inequality", "Government policies to failure", "International relations to conflict", "Economic systems to injustice"],
    "answer_en": "The life of the Negro to inequality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What did King say was the 'basic mobility' of African Americans?",
    "options_en": ["From a smaller ghetto to a larger one", "From poverty to middle class", "From ignorance to education", "From oppression to freedom"],
    "answer_en": "From a smaller ghetto to a larger one",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What did King say 'surrounds' African Americans?",
    "options_en": ["A wall of prejudice", "Opportunity", "Support", "Wealth"],
    "answer_en": "A wall of prejudice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What did King say was 'still the burden' of African Americans?",
    "options_en": ["The heaviness of discrimination", "Economic responsibility", "Political duty", "Social expectation"],
    "answer_en": "The heaviness of discrimination",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What did King say was 'still the shame' of African Americans?",
    "options_en": ["The identity crisis", "Poverty", "Lack of education", "Political powerlessness"],
    "answer_en": "The identity crisis",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What did King say he 'refused to accept' about mankind?",
    "options_en": ["That it is tragically bound to war", "That it is inherently evil", "That it cannot change", "That it is doomed"],
    "answer_en": "That it is tragically bound to war",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What did King say he 'refused to believe' about justice?",
    "options_en": ["That the bank of justice is bankrupt", "That justice is blind", "That justice is slow", "That justice is unfair"],
    "answer_en": "That the bank of justice is bankrupt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What did King say there was 'still' in humanity?",
    "options_en": ["Hope for tomorrow", "Time for change", "Money for development", "Space for growth"],
    "answer_en": "Hope for tomorrow",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What did King say would be 'the day' for all people?",
    "options_en": ["When all of God's children will be able to join hands", "When he would retire", "When America would be perfect", "When all wars would end"],
    "answer_en": "When all of God's children will be able to join hands",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What did King say humanity would be able to do?",
    "options_en": ["Transform jangling discords into a beautiful symphony", "Eliminate all governments", "Create perfect technology", "Control nature completely"],
    "answer_en": "Transform jangling discords into a beautiful symphony",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What did King say would be 'crowned with glory' ultimately?",
    "options_en": ["That day", "The Nobel ceremony", "His life", "American history"],
    "answer_en": "That day",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What did King say was 'more honorable' in life?",
    "options_en": ["To serve than to be served", "To lead than to follow", "To win than to lose", "To speak than to listen"],
    "answer_en": "To serve than to be served",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What did King call the 'privilege' of life?",
    "options_en": ["To work for what one believes in", "To receive awards", "To meet famous people", "To have wealth"],
    "answer_en": "To work for what one believes in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What did King say he would 'keep burning' as a symbol?",
    "options_en": ["The torch of nonviolence", "Anger against oppressors", "The flame of revolution", "Economic competition"],
    "answer_en": "The torch of nonviolence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What did King say he would 'guard against' personally?",
    "options_en": ["The paralysis of crippling fear", "Political enemies", "Economic problems", "International criticism"],
    "answer_en": "The paralysis of crippling fear",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What did King say he would 'continue to' maintain?",
    "options_en": ["Work with faith", "Fight with weapons", "Compromise principles", "Ignore opposition"],
    "answer_en": "Work with faith",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What did King say was 'not some pious expression' but reality?",
    "options_en": ["The belief that all men are created equal", "The Nobel Prize award", "His speech", "The civil rights movement"],
    "answer_en": "The belief that all men are created equal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What did King say about the 'moral arc of the universe'?",
    "options_en": ["It is long but bends toward justice", "It is short and broken", "It is straight and narrow", "It is curved toward power"],
    "answer_en": "It is long but bends toward justice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What did King say about 'truth and love' in the end?",
    "options_en": ["They will have the final word", "They are weak", "They must compromise", "They will lose"],
    "answer_en": "They will have the final word",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What did King say about 'unarmed truth'?",
    "options_en": ["It is unconditional love", "It is powerless", "It is naive", "It is dangerous"],
    "answer_en": "It is unconditional love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What did King say would transform 'dark yesterdays'?",
    "options_en": ["Bright tomorrows", "Forgotten memories", "Political change", "Economic growth"],
    "answer_en": "Bright tomorrows",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What did King say the award recognized beyond himself?",
    "options_en": ["The dignity of the struggle for freedom", "His personal achievements", "American democracy", "African culture"],
    "answer_en": "The dignity of the struggle for freedom",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What did King say was the 'creative battle' being fought?",
    "options_en": ["Against racial injustice", "The Vietnam War", "The Cold War", "The war on poverty"],
    "answer_en": "Against racial injustice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What did King describe the world as having become?",
    "options_en": ["A neighborhood", "A battlefield", "A marketplace", "A classroom"],
    "answer_en": "A neighborhood",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What did King say about receiving the award personally?",
    "options_en": ["It was above and beyond his personal accomplishments", "He deserved it completely", "It was long overdue", "It was a surprise"],
    "answer_en": "It was above and beyond his personal accomplishments",
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