show_db = {
  "a": "suits",
  "b": "silicon_valley",
  "c": "the_mentalist"
}

ques_db = {
  "suits": [{
    question: `Harvey Specter is considered one of New York's most brilliant corporate litigation lawyers, but what's his unusual middle name?
    (a) Michael
    (b) Reginald
    (c) Brandon
    `,
    answer: "b",
  },
  {
    question: `Which partner loves mudding and had a cat named Bruno?
    (a) Harvey Specter
    (b) Louis Litt
    (c) Jessica Pearson
    `,
    answer: "b",
  },
  {
    question: `Which English lawyer described Donna Paulsen as having \"a body like Elizabeth Hurley and the sass of a Maggie Thatcher\" in season 3?
    (a) Michael Ross
    (b) Harvey Specter
    (c) Stephen Huntley
    `,
    answer: "c",
  },
  {
    question: `Where did Harvey Specter work before he became an associate at Pearson Hardman?
    (a) New York District Attorney's Office
    (b) Bratton Gould
    (c) Darby International
    `,
    answer: "a",
  },
  {
    question: `Jessica Pearson and Daniel Hardman ousted three named partners in order to create Pearson Hardman. What was the firm called before the ousting?
    (a) Specter Zane Litt
    (b) Gordon Schmidt Van Dyke
    (c) Pearson Hardman
    `,
    answer: "b",
  },
  ],
  "the_mentalist": [{
    question: `Who killed Patrick Jane's family?
    (a) Tommy Volker
    (b) Bret Stiles
    (c) Red John
    `,
    answer: "c",
  },
  {
    question: `Who was Patrick Jane's wife that was killed by Red John?
    (a) Erica Flynn
    (b) Angela Ruskin
    (c) Kristina Frye
    `,
    answer: "b",
  },
  {
    question: `What is Patrick Jane's job at the CBI?
    (a) A Special Agent
    (b) A Consultant
    (c) No Official Title
    `,
    answer: "b",
  },
  {
    question: `Where does Kimball Cho go work after the CBI?
    (a) A Local Sheriff's Office
    (b) A Security Agency
    (c) The FBI
    `,
    answer: "c",
  },
  {
    question: `What was Bret Stiles' job?
    (a) A FBI Agent
    (b) Leader of Visualize
    (c) Leader of Church
    `,
    answer: "b",
  },
  ],
  "silicon_valley": [{
    question: `Gavin Belson originally offered how much to buy Pied Piper?
    (a) $1,000,000
    (b) $600,000
    (c) $100,000
    `,
    answer: "b",
  },
  {
    question: `At TechCrunch Disrupt, Jared was on what drug?
    (a) Adderall
    (b) Opiates
    (c) Weed
    `,
    answer: "a",
  },
  {
    question: `Where did Richard first meet Peter Gregory?
    (a) At a coffee shop
    (b) At a tech start-up competition
    (c) Outside a TED talk

    `,
    answer: "c",
  },
  {
    question: `What is the name of the test that measures the performance of lossless compression software?
    (a) TechCrunch Test
    (b) Compression Score
    (c) Weissman Score
    `,
    answer: "c",
  },
  {
    question: `Which middle-out compression company tricked Pied Piper into revealing their algorithms?
    (a) Endframe
    (b) Hooli
    (c) Google
    `,
    answer: "a",
  },
  ]
}

var chalk = require("chalk");
var readLineSync = require("readline-sync");

var score = 0;
var name, fscore;
var show_name;

function intro() {
  console.log(chalk.bgBlue(`First Things First:
  1. Choose any one of the three TV Shows
  2. Followed by 5 questions on TV Show of your choice
  3. Each correct answer gets you 2 points
  4. Enter only 'a', 'b' or 'c' to make choice`));
  name = readLineSync.question("\nWhat should I call you?\n");
  show_choice = readLineSync.question(`\nWhich of the following shows do you like the most?
  (a) Suits
  (b) Silicon Valley
  (c) The Mentalist
  Your choice: `);
  show_name = show_db[show_choice];
  console.log(chalk.bgYellow(`\n\nGreat, let's begin ${name}!\n`));

}

function quiz() {
  ques_db[show_name].map((q, idx) => {
    console.log(chalk.bgYellow(`Question ${idx + 1}: `));
    console.log(q.question);
    var ans = readLineSync.question("Your answer: ");
    if (ans === q.answer) {
      console.log(chalk.green("\nYay, Correct Answer! You scored 2 points."))
      score += 2;
      console.log(chalk.bgBlue(`Current score: ${score}`));
      console.log("––––––––––\n\n");
    }
    else {
      console.log(chalk.red("\nUh Oh, Wrong Answer! You scored 0 points."));
      console.log(chalk.bgBlue(`Current score: ${score}`));
      console.log("––––––––––\n\n");
    }
  });
  if (score < 10) {
    fscore = `0${score}`;
  }
  else {
    fscore = "10";
  }
  footer = `
––––––––––––––––––––––––––––––––––––––––––
      Thank You for taking the quiz.      
        Your final score is ${fscore}/10.        
––––––––––––––––––––––––––––––––––––––––––
          Made with ❤️  by Hetav           
––––––––––––––––––––––––––––––––––––––––––
`;
}

header = `
––––––––––––––––––––––––––––––––––––––––––
        Welcome to TV Shows Trivia        
––––––––––––––––––––––––––––––––––––––––––
`;

console.log(chalk.bgYellow(header));
intro();
quiz();
console.log(chalk.bgYellow(footer));