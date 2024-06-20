// Quiz data
const quizData = {
    "Naruto": {
      "questions": [
        {
          "question": "What is the name of the Third Hokage's summoning beast?",
          "choices": [
            "A) Gamabunta",
            "B) Katsuyu",
            "C) Enma",
            "D) Aoda"
          ],
          "answer": "C) Enma"
        },
        {
          "question": "What is Itachi Uchiha's favorite food?",
          "choices": [
            "A) Ramen",
            "B) Onigiri with seaweed and vegetables",
            "C) Sushi",
            "D) Dango"
          ],
          "answer": "B) Onigiri with seaweed and vegetables"
        },
        {
          "question": "Which member of Team 7 is the first to awaken their Sharingan?",
          "choices": [
            "A) Naruto Uzumaki",
            "B) Sasuke Uchiha",
            "C) Kakashi Hatake",
            "D) Sakura Haruno"
          ],
          "answer": "B) Sasuke Uchiha"
        },
        {
          "question": "What is the name of Gaara's ultimate defense technique?",
          "choices": [
            "A) Sand Armor",
            "B) Sand Shield",
            "C) Shield of Shukaku",
            "D) Sand Wall"
          ],
          "answer": "C) Shield of Shukaku"
        },
        {
          "question": "Who was the original owner of the sword Samehada before Kisame Hoshigaki?",
          "choices": [
            "A) Zabuza Momochi",
            "B) Mangetsu Hozuki",
            "C) Juzo Biwa",
            "D) Fuguki Suikazan"
          ],
          "answer": "C) Juzo Biwa"
        },
        {
          "question": "Who killed Jiraiya, and in which episode does it happen?",
          "choices": [
            "A) Orochimaru, Episode 133",
            "B) Pain (Nagato), Episode 133",
            "C) Itachi Uchiha, Episode 134",
            "D) Kabuto Yakushi, Episode 134"
          ],
          "answer": "B) Pain (Nagato), Episode 133"
        },
        {
          "question": "What is the name of the jutsu Naruto uses to defeat Neji in the Chunin Exams?",
          "choices": [
            "A) Rasengan",
            "B) Shadow Clone Jutsu",
            "C) Uzumaki Barrage",
            "D) Summoning Jutsu"
          ],
          "answer": "A) Rasengan"
        },
        {
          "question": "During the Fourth Great Ninja War, who becomes the Ten-Tails Jinchuriki first?",
          "choices": [
            "A) Madara Uchiha",
            "B) Naruto Uzumaki",
            "C) Obito Uchiha",
            "D) Sasuke Uchiha"
          ],
          "answer": "C) Obito Uchiha"
        },
        {
          "question": "What is the significance of the 'Will of Fire' in Konoha?",
          "choices": [
            "A) It is a special fire jutsu.",
            "B) It is a philosophy that emphasizes the importance of love, loyalty, and protection of the village.",
            "C) It is a legendary weapon.",
            "D) It is the name of the village's founding document."
          ],
          "answer": "B) It is a philosophy that emphasizes the importance of love, loyalty, and protection of the village."
        },
        {
          "question": "In which battle does Naruto first use his Sage Mode?",
          "choices": [
            "A) Battle against Orochimaru",
            "B) Battle against Itachi Uchiha",
            "C) Battle against Pain",
            "D) Battle against Madara Uchiha"
          ],
          "answer": "C) Battle against Pain"
        },
        {
          "question": "What are the names of the two Great Sage Toads who train Naruto in Sage Mode?",
          "choices": [
            "A) Fukasaku and Shima",
            "B) Gamabunta and Gamakichi",
            "C) Jiraiya and Minato",
            "D) Ma and Pa"
          ],
          "answer": "A) Fukasaku and Shima"
        },
        {
          "question": "What kekkei genkai does Haku possess?",
          "choices": [
            "A) Lava Release",
            "B) Ice Release",
            "C) Wood Release",
            "D) Boil Release"
          ],
          "answer": "B) Ice Release"
        },
        {
          "question": "Which clan is known for their Byakugan and Gentle Fist technique?",
          "choices": [
            "A) Uchiha Clan",
            "B) Senju Clan",
            "C) Hyuga Clan",
            "D) Uzumaki Clan"
          ],
          "answer": "C) Hyuga Clan"
        },
        {
          "question": "What is the name of the forbidden jutsu that Naruto learns from the Scroll of Seals?",
          "choices": [
            "A) Rasengan",
            "B) Multi Shadow Clone Jutsu",
            "C) Flying Thunder God Technique",
            "D) None of the above"
          ],
          "answer": "B) Multi Shadow Clone Jutsu"
        },
        {
          "question": "Which tailed beast is sealed within Killer Bee?",
          "choices": [
            "A) Nine-Tails (Kurama)",
            "B) Seven-Tails (Chomei)",
            "C) Eight-Tails (Gyūki)",
            "D) Six-Tails (Saiken)"
          ],
          "answer": "C) Eight-Tails (Gyūki)"
        },
        {
          "question": "What does the acronym 'ANBU' stand for?",
          "choices": [
            "A) Ansatsu Senjutsu Tokushu Butai (Assassination Tactics Special Force)",
            "B) Anbu Black Ops",
            "C) Advanced Ninja Battle Unit",
            "D) All of the above"
          ],
          "answer": "A) Ansatsu Senjutsu Tokushu Butai (Assassination Tactics Special Force)"
        },
        {
          "question": "Who was the first female Hokage?",
          "choices": [
            "A) Sakura Haruno",
            "B) Tsunade",
            "C) Kushina Uzumaki",
            "D) Hinata Hyuga"
          ],
          "answer": "B) Tsunade"
        },
        {
          "question": "What is the name of the village hidden in the mist?",
          "choices": [
            "A) Sunagakure",
            "B) Iwagakure",
            "C) Kirigakure",
            "D) Kumogakure"
          ],
          "answer": "C) Kirigakure"
        },
        {
          "question": "Who created the Akatsuki organization originally?",
          "choices": [
            "A) Itachi Uchiha",
            "B) Nagato",
            "C) Yahiko",
            "D) Konan"
          ],
          "answer": "C) Yahiko"
        },
        {
          "question": "What was the name of Sasuke's team after he left Konoha and before joining Akatsuki?",
          "choices": [
            "A) Team Hebi",
            "B) Team Taka",
            "C) Team Eagle",
            "D) Team Snake"
          ],
          "answer": "A) Team Hebi"
        }
      ]
    },
    "OnePiece": {
      "questions": [
        {
          "question": "What was Gol D. Roger's ship called?",
          "choices": [
            "A) Oro Jackson",
            "B) Thousand Sunny",
            "C) Moby Dick",
            "D) Red Force"
          ],
          "answer": "A) Oro Jackson"
        },
        {
          "question": "Which two characters fought during the famous 'Duel at Banaro Island'?",
          "choices": [
            "A) Luffy and Blackbeard",
            "B) Ace and Blackbeard",
            "C) Shanks and Mihawk",
            "D) Roger and Whitebeard"
          ],
          "answer": "B) Ace and Blackbeard"
        },
        {
          "question": "What is the name of the Admiral who uses the Ice-Ice Fruit?",
          "choices": [
            "A) Kizaru",
            "B) Akainu",
            "C) Aokiji",
            "D) Fujitora"
          ],
          "answer": "C) Aokiji"
        },
        {
          "question": "What is the real name of Gold Roger?",
          "choices": [
            "A) Portgas D. Ace",
            "B) Gol D. Roger",
            "C) Silvers Rayleigh",
            "D) Marshall D. Teach"
          ],
          "answer": "B) Gol D. Roger"
        },
        {
          "question": "Who was the captain of the Bellamy Pirates?",
          "choices": [
            "A) Bellamy",
            "B) Sarquiss",
            "C) Belladonna",
            "D) Bell-mère"
          ],
          "answer": "A) Bellamy"
        },
        {
          "question": "Who is the current user of the Ope Ope no Mi?",
          "choices": [
            "A) Trafalgar D. Water Law",
            "B) Donquixote Doflamingo",
            "C) Eustass Kid",
            "D) Basil Hawkins"
          ],
          "answer": "A) Trafalgar D. Water Law"
        },
        {
          "question": "What is the capital of the world government?",
          "choices": [
            "A) Impel Down",
            "B) Mariejois",
            "C) Enies Lobby",
            "D) Water 7"
          ],
          "answer": "B) Mariejois"
        },
        {
          "question": "What is the name of the swordsman in the Straw Hat Pirates?",
          "choices": [
            "A) Roronoa Zoro",
            "B) Trafalgar D. Water Law",
            "C) Buggy the Clown",
            "D) Silvers Rayleigh"
          ],
          "answer": "A) Roronoa Zoro"
        },
        {
          "question": "Who is the oldest of the Yonko?",
          "choices": [
            "A) Blackbeard",
            "B) Big Mom",
            "C) Shanks",
            "D) Kaido"
          ],
          "answer": "C) Shanks"
        },
        {
          "question": "Who is the sniper of the Straw Hat Pirates?",
          "choices": [
            "A) Monkey D. Luffy",
            "B) Usopp",
            "C) Tony Tony Chopper",
            "D) Nico Robin"
          ],
          "answer": "B) Usopp"
        },
        {
          "question": "What is the name of the island where Luffy learns Haki during the two-year timeskip?",
          "choices": [
            "A) Amazon Lily",
            "B) Dressrosa",
            "C) Sabaody Archipelago",
            "D) Rusukaina"
          ],
          "answer": "D) Rusukaina"
        },
        {
          "question": "What is the name of Luffy's father?",
          "choices": [
            "A) Garp",
            "B) Dragon",
            "C) Rayleigh",
            "D) Crocodile"
          ],
          "answer": "B) Dragon"
        },
        {
          "question": "What is the name of the island where the Straw Hat Pirates first meet Brook?",
          "choices": [
            "A) Sabaody Archipelago",
            "B) Thriller Bark",
            "C) Whole Cake Island",
            "D) Fish-Man Island"
          ],
          "answer": "B) Thriller Bark"
        },
        {
          "question": "Who is the captain of the Heart Pirates?",
          "choices": [
            "A) Eustass Kid",
            "B) Basil Hawkins",
            "C) Jewelry Bonney",
            "D) Trafalgar D. Water Law"
          ],
          "answer": "D) Trafalgar D. Water Law"
        },
        {
          "question": "What is the name of Luffy's ship?",
          "choices": [
            "A) Red Force",
            "B) Going Merry",
            "C) Thousand Sunny",
            "D) Oro Jackson"
          ],
          "answer": "C) Thousand Sunny"
        }
      ]
    },
    "TokyoRevengers": {
      "questions": [
        {
          "question": "What is the name of the gang that Takemichi joins to save Hina?",
          "choices": [
            "A) Black Dragons",
            "B) Valhalla",
            "C) Tokyo Manji Gang",
            "D) Moebius"
          ],
          "answer": "C) Tokyo Manji Gang"
        },
        {
          "question": "Who is the first leader of the Tokyo Manji Gang?",
          "choices": [
            "A) Takemichi Hanagaki",
            "B) Ken Ryuguji",
            "C) Manjiro Sano",
            "D) Kisaki Tetta"
          ],
          "answer": "C) Manjiro Sano"
        },
        {
          "question": "What is Draken's real name?",
          "choices": [
            "A) Seishu Inui",
            "B) Takashi Mitsuya",
            "C) Kazutora Hanemiya",
            "D) Ken Ryuguji"
          ],
          "answer": "C) Kazutora Hanemiya"
        },
        {
          "question": "Who is Takemichi's first love?",
          "choices": [
            "A) Hina",
            "B) Emma",
            "C) Senju",
            "D) Mikey"
          ],
          "answer": "A) Hina"
        },
        {
          "question": "What is the name of Mikey's older brother?",
          "choices": [
            "A) Manjiro Sano",
            "B) Izana Kurokawa",
            "C) Sanzu Haruchiyo",
            "D) Shinichiro Sano"
          ],
          "answer": "D) Shinichiro Sano"
        },
        {
          "question": "Who is the vice-captain of the Tokyo Manji Gang?",
          "choices": [
            "A) Takemichi Hanagaki",
            "B) Chifuyu Matsuno",
            "C) Ken Ryuguji",
            "D) Pah-chin"
          ],
          "answer": "B) Chifuyu Matsuno"
        },
        {
          "question": "What is the name of the gang that fights the Tokyo Manji Gang in the Bloody Halloween incident?",
          "choices": [
            "A) Valhalla",
            "B) Moebius",
            "C) Black Dragons",
            "D) Brahman"
          ],
          "answer": "A) Valhalla"
        },
        {
          "question": "Who becomes the acting leader of the Tokyo Manji Gang after Mikey's temporary disappearance?",
          "choices": [
            "A) Takemichi Hanagaki",
            "B) Ken Ryuguji",
            "C) Draken",
            "D) Pah-chin"
          ],
          "answer": "A) Takemichi Hanagaki"
        },
        {
          "question": "What is the name of the middle school where Takemichi and his friends went back in time?",
          "choices": [
            "A) Tachibana Middle School",
            "B) Tenjiku Middle School",
            "C) Shibuya Middle School",
            "D) Higashi Middle School"
          ],
          "answer": "B) Tenjiku Middle School"
        },
        {
          "question": "What is the name of Takemichi's childhood friend who first introduced him to the Tokyo Manji Gang?",
          "choices": [
            "A) Mikey",
            "B) Draken",
            "C) Hinata Tachibana",
            "D) Naoto Tachibana"
          ],
          "answer": "D) Naoto Tachibana"
        }
      ]
    },
    "JujutsuKaisen": {
      "questions": [
        {
          "question": "Who is the main protagonist of 'Jujutsu Kaisen'?",
          "choices": [
            "A) Megumi Fushiguro",
            "B) Nobara Kugisaki",
            "C) Yuji Itadori",
            "D) Satoru Gojo"
          ],
          "answer": "C) Yuji Itadori"
        },
        {
          "question": "What is the name of the curse that Yuji Itadori consumes?",
          "choices": [
            "A) Sukuna",
            "B) Mahito",
            "C) Jogo",
            "D) Hanami"
          ],
          "answer": "A) Sukuna"
        },
        {
          "question": "What is the primary school where sorcerers are trained in 'Jujutsu Kaisen'?",
          "choices": [
            "A) Kyoto Jujutsu High",
            "B) Tokyo Jujutsu High",
            "C) Osaka Jujutsu High",
            "D) Hokkaido Jujutsu High"
          ],
          "answer": "B) Tokyo Jujutsu High"
        },
        {
          "question": "What is Megumi Fushiguro's summoning shikigami called?",
          "choices": [
            "A) Nue",
            "B) Toad",
            "C) Cat",
            "D) Bird"
          ],
          "answer": "A) Nue"
        },
        {
          "question": "What is the name of the cursed spirit that is a special grade and specializes in manipulation?",
          "choices": [
            "A) Mahito",
            "B) Jogo",
            "C) Hanami",
            "D) Dagon"
          ],
          "answer": "A) Mahito"
        },
        {
          "question": "Who is the advisor and teacher to Yuji Itadori at Tokyo Jujutsu High?",
          "choices": [
            "A) Satoru Gojo",
            "B) Suguru Geto",
            "C) Kento Nanami",
            "D) Masamichi Yaga"
          ],
          "answer": "A) Satoru Gojo"
        },
        {
          "question": "Who is the third-year student at Kyoto Jujutsu High who uses cursed speech?",
          "choices": [
            "A) Panda",
            "B) Maki Zenin",
            "C) Toge Inumaki",
            "D) Mai Zenin"
          ],
          "answer": "C) Toge Inumaki"
        },
        {
          "question": "Who is the principal of Tokyo Jujutsu High?",
          "choices": [
            "A) Masamichi Yaga",
            "B) Satoru Gojo",
            "C) Kiyotaka Ijichi",
            "D) Masamichi Yaga"
          ],
          "answer": "A) Masamichi Yaga"
        },
        {
          "question": "What type of cursed spirit is Hanami?",
          "choices": [
            "A) Special Grade",
            "B) Cursed Womb",
            "C) High Grade",
            "D) Cursed Tool"
          ],
          "answer": "C) High Grade"
        },
        {
          "question": "Who is the second-year student at Tokyo Jujutsu High who is known for his obsession with idol culture?",
          "choices": [
            "A) Panda",
            "B) Maki Zenin",
            "C) Toge Inumaki",
            "D) Aoi Todo"
          ],
          "answer": "D) Aoi Todo"
        },
        {
          "question": "What is the primary technique used by Satoru Gojo?",
          "choices": [
            "A) Domain Expansion",
            "B) Black Flash",
            "C) Limitless",
            "D) Cursed Technique Reversal"
          ],
          "answer": "C) Limitless"
        },
        {
          "question": "What is the name of the cursed spirit that Yuji Itadori consumes, which has four arms and can control flames?",
          "choices": [
            "A) Jogo",
            "B) Hanami",
            "C) Mahito",
            "D) Dagon"
          ],
          "answer": "A) Jogo"
        },
        {
          "question": "What is the name of the second-year student at Kyoto Jujutsu High who is known for his exceptional physical abilities and is a cursed corpse?",
          "choices": [
            "A) Panda",
            "B) Maki Zenin",
            "C) Toge Inumaki",
            "D) Yuji Itadori"
          ],
          "answer": "A) Panda"
        },
        {
          "question": "What type of cursed spirit is Dagon?",
          "choices": [
            "A) Cursed Womb",
            "B) Special Grade",
            "C) High Grade",
            "D) Cursed Tool"
          ],
          "answer": "D) Cursed Tool"
        },
        {
          "question": "Who is the blind monk who assists Yuji Itadori in his first mission at Tokyo Jujutsu High?",
          "choices": [
            "A) Satoru Gojo",
            "B) Kento Nanami",
            "C) Toge Inumaki",
            "D) Suguru Geto"
          ],
          "answer": "C) Toge Inumaki"
        }
      ]
    }
  };
  
   //export default animeTrivia;
  

  let currentCategory = "";
  let currentQuestionIndex = 0;
  let score = 0;

  // Function to start the quiz for a selected category
  function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;

    // Display quiz page and hide start page
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';

    // Display first question
    displayQuestion();
  }

  // Function to display current question
  function displayQuestion() {
    const question = quizData[currentCategory].questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;

    // Display choices
    for (let i = 0; i < 4; i++) {
      document.getElementById(`choice-${i}`).textContent = question.choices[i];
      document.querySelector(`input[value='${i}']`).checked = false; // Uncheck all radio buttons
    }
  }

  // Function to check answer and proceed to next question
  function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (!selectedChoice) {
      alert("Please select an answer.");
      return;
    }

    const selectedAnswer = quizData[currentCategory].questions[currentQuestionIndex].choices[selectedChoice.value];
    const correctAnswer = quizData[currentCategory].questions[currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
      score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData[currentCategory].questions.length) {
      displayQuestion();
    } else {
      // End of quiz
      alert(`Quiz Finished! You scored ${score} out of ${quizData[currentCategory].questions.length}.`);
      // Reset to start page
      document.getElementById('quiz-page').style.display = 'none';
      document.getElementById('start-page').style.display = 'block';
    }
  }
  function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
  
    // Set background image based on category
    let backgroundImage;
    switch (category) {
      case "Naruto":
        backgroundImage = "url('https://e0.pxfuel.com/wallpapers/239/191/desktop-wallpaper-itachi-uchiha-naruto-black-background-minimal-art-amoled-black-dark-itachi-black-and-white.jpg')";
        break;
      case "OnePiece":
        backgroundImage = "url('https://e0.pxfuel.com/wallpapers/709/717/desktop-wallpaper-one-piece-black-and-white-dark-luffy.jpg')";
        break;
      case "TokyoRevengers":
        backgroundImage = "url('https://e0.pxfuel.com/wallpapers/229/691/desktop-wallpaper-ken-ryuguji-aka-draken-from-tokyo-revengers-minimal-by-me-r-animeart-tokyo-revengers-draken.jpg')";
        break;
      default:
        backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/703/630/545/sukuna-ryomen-sukuna-jujutsu-kaisen-dark-background-simple-background-hd-wallpaper-preview.jpg')";
        break;    
    }
  
    // Apply background image to the quiz page
    document.getElementById('quiz-background').style.backgroundImage = backgroundImage;
  
    // Display quiz page and hide start page
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
  
    // Display first question
    displayQuestion();
  }
  