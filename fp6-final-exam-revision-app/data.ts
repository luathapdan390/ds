
import { ExamData, QuestionType } from './types';

export const examData: ExamData = {
  title: "FP6 - FINAL EXAM REVISION - 1st Semester",
  sections: [
    {
      title: "I. Phonetic",
      instructions: "Choose the word whose underlined part is pronounced differently from that of the others.",
      questions: [
        { id: "p1", section: "I", type: QuestionType.MCQ, questionText: "1.", options: ["bridge", "library", "cat", "middle"], correctAnswer: "C" },
        { id: "p2", section: "I", type: QuestionType.MCQ, questionText: "2.", options: ["climbs", "jumps", "survives", "kills"], correctAnswer: "B" },
        { id: "p3", section: "I", type: QuestionType.MCQ, questionText: "3.", options: ["panda", "cat", "gorilla", "rabbit"], correctAnswer: "C" },
        { id: "p4", section: "I", type: QuestionType.MCQ, questionText: "4.", options: ["boxes", "fishes", "washes", "does"], correctAnswer: "D" },
        { id: "p5", section: "I", type: QuestionType.MCQ, questionText: "5.", options: ["tall", "flat", "cat", "fat"], correctAnswer: "A" }
      ]
    },
    {
      title: "II. Stress",
      instructions: "Choose the word whose stress pattern is different from that of the others.",
      questions: [
        { id: "s1", section: "II", type: QuestionType.MCQ, questionText: "1.", options: ["hunting", "common", "forest", "extinct"], correctAnswer: "D" },
        { id: "s2", section: "II", type: QuestionType.MCQ, questionText: "2.", options: ["forest", "wildlife", "option", "survive"], correctAnswer: "D" },
        { id: "s3", section: "II", type: QuestionType.MCQ, questionText: "3.", options: ["celebrate", "organized", "family", "example"], correctAnswer: "D" },
        { id: "s4", section: "II", type: QuestionType.MCQ, questionText: "4.", options: ["parade", "friendly", "because", "enjoy"], correctAnswer: "B" },
        { id: "s5", section: "II", type: QuestionType.MCQ, questionText: "5.", options: ["elephant", "gorilla", "octopus", "crocodile"], correctAnswer: "B" }
      ]
    },
    {
      title: "III. Vocabulary and Grammar",
      instructions: "Choose the best answer (A, B, C or D).",
      questions: [
        { id: "vg1", section: "III", type: QuestionType.MCQ, questionText: "1. Mary: 'What animal has got eight legs and often eats a lot of insects in one day?' Tom: 'A _________.'", options: ["spider", "octopus", "camel", "giraffe"], correctAnswer: "A" },
        { id: "vg2", section: "III", type: QuestionType.MCQ, questionText: "2. Linh: 'What colour is the blobfish?' Nam: 'It has a very _________ colour.'", options: ["colourful", "bright", "dull", "beautiful"], correctAnswer: "C" },
        { id: "vg3", section: "III", type: QuestionType.MCQ, questionText: "3. Mai: 'What is it important to do to all animals?' Phong: 'It's important to _________ all animals.'", options: ["see", "survive", "protect", "hear"], correctAnswer: "C" },
        { id: "vg4", section: "III", type: QuestionType.MCQ, questionText: "4. Peter: 'How fast can some snakes _________?' Mary: 'At around twenty-two kilometres an hour'", options: ["move", "fly", "run", "jump"], correctAnswer: "A" },
        { id: "vg5", section: "III", type: QuestionType.MCQ, questionText: "5. Anna: 'Where can we go to see actors perform?' David: 'We can go to the _________.'", options: ["theater", "zoo", "cinema", "supermarket"], correctAnswer: "A" },
        { id: "vg6", section: "III", type: QuestionType.MCQ, questionText: "6. Kim: 'What do you and your family usually do on New Year's Day?' Anna: 'We usually _________ a special family meal.'", options: ["have", "give", "take", "get"], correctAnswer: "A" },
        { id: "vg7", section: "III", type: QuestionType.MCQ, questionText: "7. Tom: 'What do people usually do for Halloween?' Anna: 'Do they _________ costumes for Halloween?'", options: ["do", "make", "invite", "dance"], correctAnswer: "B" },
        { id: "vg8", section: "III", type: QuestionType.MCQ, questionText: "8. Mom: 'Why are you so tired this evening?' Anna: 'Because today was a very _________ day at school.'", options: ["busy", "quiet", "special", "happy"], correctAnswer: "A" },
        { id: "vg9", section: "III", type: QuestionType.MCQ, questionText: "9. Anna: 'Can a camel live _________ water for many days?' Tom: 'Yes, it can'", options: ["under", "without", "with", "in"], correctAnswer: "B" },
        { id: "vg10", section: "III", type: QuestionType.MCQ, questionText: "10. Anna: 'What time does the movie start?' Ben: 'The movie starts _________ 8 A.M, so we need to be there by then.'", options: ["on", "at", "for", "into"], correctAnswer: "B" },
        { id: "vg11", section: "III", type: QuestionType.MCQ, questionText: "11. Anna: 'How are many wild animals today?' - Ben: 'They are _________ danger.'", options: ["on", "at", "in", "for"], correctAnswer: "C" },
        { id: "vg12", section: "III", type: QuestionType.MCQ, questionText: "12. Tom: 'How is the service at this restaurant today?' Jane: 'It's _________ it was yesterday.'", options: ["bad than", "than bad", "than worse", "worse than"], correctAnswer: "D" },
        { id: "vg13", section: "III", type: QuestionType.MCQ, questionText: "13. Tom: '_________ tigers swim?' - Jane: 'Yes, they can.'", options: ["Can", "Can't", "Does", "Is"], correctAnswer: "A" },
        { id: "vg14", section: "III", type: QuestionType.MCQ, questionText: "14. Tom: 'Be careful! That monkey is watching us.' Lily: 'Don't worry. It _________ take your food, but I'm not sure.'", options: ["is", "can't", "might", "does"], correctAnswer: "C" },
        { id: "vg15", section: "III", type: QuestionType.MCQ, questionText: "15. Peter: 'The tiger is moving quietly.' Linda: 'It _________ be looking for food.'", options: ["cannot", "might", "does", "is"], correctAnswer: "B" },
        { id: "vg16", section: "III", type: QuestionType.MCQ, questionText: "16. Kate: '_________ a school in the city?' Alex: 'Of course yes.'", options: ["Is there", "Are there", "How many", "Are"], correctAnswer: "A" },
        { id: "vg17", section: "III", type: QuestionType.MCQ, questionText: "17. Emma: '_________' Jack: 'You're welcome.'", options: ["Can you open the window?", "Thank you for carrying my bag.", "What animal do you like best?", "Do you want to sit here?"], correctAnswer: "B" },
        { id: "vg18", section: "III", type: QuestionType.MCQ, questionText: "18. Mary: 'Could you please pass me the laptop?' - John: '_________' ", options: ["Good luck", "Sorry, I don't have the time.", "Yes, here you go.", "No more."], correctAnswer: "C" },
        { id: "vg19", section: "III", type: QuestionType.MCQ, questionText: "19. Lily: '_________' - David: 'It's my pleasure.'", options: ["Yes, I'd love to.", "What's your favourite animal?", "Thanks for your help.", "How often do you wash your face?"], correctAnswer: "C" },
        { id: "vg20", section: "III", type: QuestionType.MCQ, questionText: "20. Kate: 'Excuse me, can you help me?' - Alex: '_________' ", options: ["Yes, of course", "Yes, I can swim.", "No, I'm not hungry.", "I go to school."], correctAnswer: "A" }
      ]
    },
    {
      title: "IV. Look at the signs",
      instructions: "Choose the best answer (A, B, C or D).",
      questions: [
        { id: "sn1", section: "IV", type: QuestionType.MCQ, questionText: "1. What does the sign mean? (Recycle symbol)", options: ["Reduce", "Recycle", "Replay", "Roundabout"], correctAnswer: "B" },
        { id: "sn2", section: "IV", type: QuestionType.MCQ, questionText: "2. What does the sign mean? (Hazard bolt)", options: ["Emergency exit", "Falling rocks", "Danger! High voltage", "No stairs"], correctAnswer: "C" },
        { id: "sn3", section: "IV", type: QuestionType.MCQ, questionText: "3. What does the sign mean? (Swimmer with waves/X)", options: ["You can swim here.", "It's a suitable place to swim.", "It's a dangerous place to swim.", "It's a safe place to swim"], correctAnswer: "C" },
        { id: "sn4", section: "IV", type: QuestionType.MCQ, questionText: "4. What does the sign mean? (No cell phone while pumping gas)", options: ["Using mobile phones is allowed when pumping gas.", "Using mobile phones is prohibited when pumping gas.", "Making a phone call when pumping gas is possible.", "Using mobile phones isn't dangerous when pumping gas."], correctAnswer: "B" }
      ]
    },
    {
      title: "V. Fill in the blanks (Passage 1)",
      instructions: "Choose the word (A, B, C or D) that best fits the blank space in the following passage.",
      questions: [
        { id: "c1-1", section: "V-1", type: QuestionType.MCQ, prompt: "The 'learning world' is changing (1) ______. Many students now use digital learning at home.", options: ["quick", "speedy", "continuous", "rapidly"], correctAnswer: "D" },
        { id: "c1-2", section: "V-1", type: QuestionType.MCQ, prompt: "This is great for those who can't attend (2) ______ schools.", options: ["modern", "traditional", "old", "new"], correctAnswer: "B" },
        { id: "c1-3", section: "V-1", type: QuestionType.MCQ, prompt: "However, some parents worry (3) ______ screen time.", options: ["for", "at", "about", "of"], correctAnswer: "C" },
        { id: "c1-4", section: "V-1", type: QuestionType.MCQ, prompt: "They prefer the strict (4) ______ of a boarding school, where students live and study together.", options: ["discipline", "law", "rule", "note"], correctAnswer: "A" },
        { id: "c1-5", section: "V-1", type: QuestionType.MCQ, prompt: "School subjects like maths and English are still (5) ______ but students can also choose new subjects.", options: ["elective", "obligatory", "optional", "compulsory"], correctAnswer: "D" },
        { id: "c1-6", section: "V-1", type: QuestionType.MCQ, prompt: "Many believe new technology helps students (6) ______ better and even become a genius.", options: ["concentrate", "focus", "think", "consider"], correctAnswer: "A" }
      ]
    },
    {
      title: "V. Fill in the blanks (Passage 2)",
      instructions: "Choose the word (A, B, C or D) that best fits the blank space in the following passage.",
      questions: [
        { id: "c2-1", section: "V-2", type: QuestionType.MCQ, prompt: "There is a big (1) ______ in the center, where you can buy souvenirs.", options: ["market", "station", "museum", "school"], correctAnswer: "A" },
        { id: "c2-2", section: "V-2", type: QuestionType.MCQ, prompt: "The streets are clean and the people are very (2) ______.", options: ["friendly", "noisy", "dangerous", "ugly"], correctAnswer: "A" },
        { id: "c2-3", section: "V-2", type: QuestionType.MCQ, prompt: "You can (3) ______ photos with beautiful buildings.", options: ["cook", "build", "drive", "take"], correctAnswer: "D" },
        { id: "c2-4", section: "V-2", type: QuestionType.MCQ, prompt: "Visitors can also walk (4) ______ along the river.", options: ["carefully", "quickly", "slowly", "loudly"], correctAnswer: "C" },
        { id: "c2-5", section: "V-2", type: QuestionType.MCQ, prompt: "You will love Sunny Town because it is small (5) ______ it has everything you need.", options: ["and", "but", "or", "so"], correctAnswer: "B" },
        { id: "c2-6", section: "V-2", type: QuestionType.MCQ, prompt: "Easy to travel (6) ______ the town.", options: ["on", "around", "at", "over"], correctAnswer: "B" }
      ]
    },
    {
      title: "VI. Reading (Passage 1)",
      instructions: "Decide if the statements from 1 to 4 are True or False.",
      questions: [
        { id: "r1-1", section: "VI-1", type: QuestionType.TRUE_FALSE, questionText: "1. The National Park is far from the city (about 100km).", correctAnswer: "False" },
        { id: "r1-2", section: "VI-1", type: QuestionType.TRUE_FALSE, questionText: "2. It is a good place for families.", correctAnswer: "True" },
        { id: "r1-3", section: "VI-1", type: QuestionType.TRUE_FALSE, questionText: "3. There is a lake in the center of the park.", correctAnswer: "True" },
        { id: "r1-4", section: "VI-1", type: QuestionType.TRUE_FALSE, questionText: "4. You can see deer and monkeys in the park.", correctAnswer: "True" }
      ]
    },
    {
      title: "IX. Sentence Transformation",
      instructions: "Rewrite each of the following sentences so that it means almost the same as the sentence printed before it.",
      questions: [
        { id: "t1", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "No season is colder than winter.", questionText: "Winter is", correctAnswer: ["the coldest season", "the coldest season."] },
        { id: "t2", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "No book in the library is more interesting than this book.", questionText: "This book", correctAnswer: ["is the most interesting in the library", "is the most interesting book in the library."] },
        { id: "t3", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "She is taller than all the girls in her class.", questionText: "She is", correctAnswer: ["the tallest girl in her class", "the tallest girl in her class."] },
        { id: "t4", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "What is the weight of this bag?", questionText: "How heavy", correctAnswer: ["is this bag?", "is this bag"] },
        { id: "t5", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "What is the weight of the baby?", questionText: "How heavy", correctAnswer: ["is the baby?", "is the baby"] },
        { id: "t6", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "What is the weight of that lion?", questionText: "How heavy", correctAnswer: ["is that lion?", "is that lion"] },
        { id: "t7", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "Let's go camping this weekend.", questionText: "How about", correctAnswer: ["going camping this weekend?", "going camping this weekend"] },
        { id: "t8", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "Let's go camping this weekend.", questionText: "Why don't", correctAnswer: ["we go camping this weekend?", "we go camping this weekend"] },
        { id: "t9", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "Let's play soccer after school.", questionText: "What about", correctAnswer: ["playing soccer after school?", "playing soccer after school"] },
        { id: "t10", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "Let's play soccer after school.", questionText: "Why don't", correctAnswer: ["we play soccer after school?", "we play soccer after school"] },
        { id: "t11", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "Let's have dinner together.", questionText: "How about", correctAnswer: ["having dinner together?", "having dinner together"] },
        { id: "t12", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "Let's have dinner together.", questionText: "Why don't", correctAnswer: ["we have dinner together?", "we have dinner together"] },
        { id: "t13", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "I like reading books in my free time.", questionText: "I am", correctAnswer: ["interested in reading books in my free time", "into reading books in my free time", "fond of reading books in my free time", "keen on reading books in my free time"] },
        { id: "t14", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "She loves painting pictures.", questionText: "She is", correctAnswer: ["interested in painting pictures", "into painting pictures", "fond of painting pictures", "keen on painting pictures"] },
        { id: "t15", section: "IX", type: QuestionType.TRANSFORMATION, prompt: "They like playing the guitar.", questionText: "They are", correctAnswer: ["interested in playing the guitar", "into playing the guitar", "fond of playing the guitar", "keen on playing the guitar"] }
      ]
    }
  ]
};
