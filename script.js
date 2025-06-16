const questions = {
    gk: [
        { q: "Capital of France?", options: ["Paris", "Berlin", "London", "Madrid"], answer: "Paris" },
        { q: "Which ocean is largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
        { q: "Currency of Japan?", options: ["Yen", "Dollar", "Euro", "Won"], answer: "Yen" },
        { q: "Which continent is Egypt in?", options: ["Asia", "Europe", "Africa", "Australia"], answer: "Africa" },
        { q: "Smallest country in the world?", options: ["Monaco", "Malta", "Vatican City", "San Marino"], answer: "Vatican City" },
        { q: "Who wrote national anthem of India?", options: ["Tagore", "Gandhi", "Nehru", "Ambedkar"], answer: "Tagore" },
        { q: "Which is not a primary color?", options: ["Red", "Blue", "Yellow", "Green"], answer: "Green" },
        { q: "Fastest land animal?", options: ["Cheetah", "Lion", "Horse", "Leopard"], answer: "Cheetah" },
        { q: "Human body's largest organ?", options: ["Liver", "Heart", "Skin", "Lungs"], answer: "Skin" },
        { q: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" }
    ],
    science: [
        { q: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
        { q: "H2O is chemical formula of?", options: ["Hydrogen", "Oxygen", "Water", "Helium"], answer: "Water" },
        { q: "Electric charge unit?", options: ["Volt", "Coulomb", "Ampere", "Watt"], answer: "Coulomb" },
        { q: "Which vitamin from sunlight?", options: ["A", "B", "C", "D"], answer: "D" },
        { q: "Speed of light?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "500,000 km/s"], answer: "300,000 km/s" },
        { q: "Gas for respiration?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], answer: "Oxygen" },
        { q: "Water boils at?", options: ["90°C", "95°C", "100°C", "105°C"], answer: "100°C" },
        { q: "DNA shape?", options: ["Square", "Triangle", "Double Helix", "Circle"], answer: "Double Helix" },
        { q: "Main gas in air?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Nitrogen" },
        { q: "Instrument to see tiny objects?", options: ["Telescope", "Microscope", "Periscope", "Binoculars"], answer: "Microscope" }
    ],
    math: [
        { q: "5 + 7 = ?", options: ["10", "12", "14", "15"], answer: "12" },
        { q: "Square root of 81?", options: ["7", "8", "9", "10"], answer: "9" },
        { q: "12 x 11 = ?", options: ["121", "132", "142", "122"], answer: "132" },
        { q: "50 ÷ 5 = ?", options: ["5", "10", "15", "20"], answer: "10" },
        { q: "Value of π?", options: ["3.12", "3.14", "3.16", "3.18"], answer: "3.14" },
        { q: "Half of 100?", options: ["40", "45", "50", "55"], answer: "50" },
        { q: "Prime number?", options: ["9", "15", "7", "21"], answer: "7" },
        { q: "Area of circle formula?", options: ["πr", "πr²", "2πr", "πd"], answer: "πr²" },
        { q: "Square of 15?", options: ["215", "225", "235", "245"], answer: "225" },
        { q: "Factorial of 4?", options: ["12", "24", "8", "16"], answer: "24" }
    ],
    history: [
        { q: "Who discovered America?", options: ["Columbus", "Newton", "Galileo", "Einstein"], answer: "Columbus" },
        { q: "World War 2 ended in?", options: ["1945", "1939", "1950", "1920"], answer: "1945" },
        { q: "Who was 1st US President?", options: ["Lincoln", "Washington", "Adams", "Jefferson"], answer: "Washington" },
        { q: "Who built Taj Mahal?", options: ["Akbar", "Aurangzeb", "Shah Jahan", "Babur"], answer: "Shah Jahan" },
        { q: "French Revolution started in?", options: ["1789", "1800", "1776", "1750"], answer: "1789" },
        { q: "Cold War mainly between?", options: ["US & China", "US & USSR", "UK & Germany", "India & Pakistan"], answer: "US & USSR" },
        { q: "First man on moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], answer: "Neil Armstrong" },
        { q: "Berlin Wall fell in?", options: ["1985", "1987", "1989", "1991"], answer: "1989" },
        { q: "Who wrote 'Mein Kampf'?", options: ["Churchill", "Hitler", "Stalin", "Roosevelt"], answer: "Hitler" },
        { q: "Mahatma Gandhi died in?", options: ["1947", "1948", "1949", "1950"], answer: "1948" }
    ],
    sports: [
        { q: "How many players in soccer?", options: ["10", "11", "12", "9"], answer: "11" },
        { q: "Olympics held every?", options: ["2 years", "3 years", "4 years", "5 years"], answer: "4 years" },
        { q: "Highest score in cricket?", options: ["400", "500", "501", "600"], answer: "501" },
        { q: "Wimbledon is played on?", options: ["Grass", "Clay", "Hard", "Carpet"], answer: "Grass" },
        { q: "Basketball uses how many players?", options: ["4", "5", "6", "7"], answer: "5" },
        { q: "100m world record holder?", options: ["Bolt", "Gatlin", "Powell", "Lewis"], answer: "Bolt" },
        { q: "FIFA stands for?", options: ["Football International Federation Association", "Fédération Internationale de Football Association", "Football Info Association", "None"], answer: "Fédération Internationale de Football Association" },
        { q: "Tennis Grand Slam total?", options: ["2", "3", "4", "5"], answer: "4" },
        { q: "Sport of Roger Federer?", options: ["Tennis", "Football", "Cricket", "Golf"], answer: "Tennis" },
        { q: "Michael Jordan played?", options: ["Baseball", "Basketball", "Soccer", "Hockey"], answer: "Basketball" }
    ],
    geography: [
        { q: "Largest desert?", options: ["Sahara", "Gobi", "Kalahari", "Atacama"], answer: "Sahara" },
        { q: "Tallest mountain?", options: ["K2", "Everest", "Makalu", "Kanchenjunga"], answer: "Everest" },
        { q: "Longest river?", options: ["Amazon", "Yangtze", "Nile", "Mississippi"], answer: "Nile" },
        { q: "Coldest place?", options: ["Siberia", "Antarctica", "Greenland", "Iceland"], answer: "Antarctica" },
        { q: "Largest country?", options: ["Russia", "USA", "China", "Canada"], answer: "Russia" },
        { q: "Smallest continent?", options: ["Europe", "Australia", "Antarctica", "South America"], answer: "Australia" },
        { q: "Which country has most islands?", options: ["Sweden", "Indonesia", "Philippines", "Canada"], answer: "Sweden" },
        { q: "Deepest ocean trench?", options: ["Java Trench", "Mariana Trench", "Puerto Rico Trench", "Tonga Trench"], answer: "Mariana Trench" },
        { q: "Largest lake?", options: ["Superior", "Victoria", "Baikal", "Caspian Sea"], answer: "Caspian Sea" },
        { q: "Which city is known as Big Apple?", options: ["Los Angeles", "New York", "Chicago", "San Francisco"], answer: "New York" }
    ],
    literature: [
        { q: "Author of 'Hamlet'?", options: ["Shakespeare", "Dickens", "Rowling", "Tolkien"], answer: "Shakespeare" },
        { q: "Greek god of war?", options: ["Apollo", "Zeus", "Ares", "Hermes"], answer: "Ares" },
        { q: "Wrote '1984'?", options: ["Orwell", "Huxley", "Tolstoy", "Hemingway"], answer: "Orwell" },
        { q: "Author of 'Harry Potter'?", options: ["Tolkien", "Rowling", "Lewis", "Martin"], answer: "Rowling" },
        { q: "Who wrote 'Pride and Prejudice'?", options: ["Austen", "Bronte", "Dickens", "Eliot"], answer: "Austen" },
        { q: "Homer's famous work?", options: ["Odyssey", "Divine Comedy", "Hamlet", "Iliad"], answer: "Odyssey" },
        { q: "Dostoevsky wrote?", options: ["Crime and Punishment", "1984", "Inferno", "Ulysses"], answer: "Crime and Punishment" },
        { q: "Author of 'The Hobbit'?", options: ["Rowling", "Tolkien", "Lewis", "Dickens"], answer: "Tolkien" },
        { q: "Sherlock Holmes creator?", options: ["Doyle", "Christie", "Poe", "Hitchcock"], answer: "Doyle" },
        { q: "Author of 'Don Quixote'?", options: ["Cervantes", "Dumas", "Homer", "Shakespeare"], answer: "Cervantes" }
    ],
    art: [
        { q: "Painter of Mona Lisa?", options: ["Da Vinci", "Van Gogh", "Picasso", "Michelangelo"], answer: "Da Vinci" },
        { q: "The Starry Night painter?", options: ["Da Vinci", "Van Gogh", "Picasso", "Rembrandt"], answer: "Van Gogh" },
        { q: "Painter of The Scream?", options: ["Munch", "Monet", "Manet", "Renoir"], answer: "Munch" },
        { q: "Sistine Chapel painted by?", options: ["Da Vinci", "Raphael", "Michelangelo", "Donatello"], answer: "Michelangelo" },
        { q: "Cubism founder?", options: ["Picasso", "Matisse", "Kandinsky", "Warhol"], answer: "Picasso" },
        { q: "Famous for Campbell’s Soup?", options: ["Warhol", "Pollock", "Dali", "Chagall"], answer: "Warhol" },
        { q: "Persistence of Memory artist?", options: ["Dali", "Picasso", "Monet", "Da Vinci"], answer: "Dali" },
        { q: "Water Lilies painter?", options: ["Monet", "Manet", "Renoir", "Degas"], answer: "Monet" },
        { q: "David sculpture by?", options: ["Michelangelo", "Donatello", "Bernini", "Rodin"], answer: "Michelangelo" },
        { q: "Guernica painted by?", options: ["Picasso", "Dali", "Miro", "Klee"], answer: "Picasso" }
    ],
    technology: [
        { q: "Inventor of WWW?", options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"], answer: "Tim Berners-Lee" },
        { q: "First programming language?", options: ["Python", "C", "Fortran", "Java"], answer: "Fortran" },
        { q: "Microsoft founder?", options: ["Gates", "Jobs", "Zuckerberg", "Musk"], answer: "Gates" },
        { q: "Apple co-founder?", options: ["Jobs", "Bezos", "Page", "Brin"], answer: "Jobs" },
        { q: "Android is by?", options: ["Google", "Apple", "Microsoft", "IBM"], answer: "Google" },
        { q: "RAM stands for?", options: ["Read Access Memory", "Random Access Memory", "Remote Access Module", "Read And Modify"], answer: "Random Access Memory" },
        { q: "Binary language uses?", options: ["2", "10", "8", "16"], answer: "2" },
        { q: "Google CEO (2023)?", options: ["Pichai", "Nadella", "Cook", "Zuckerberg"], answer: "Pichai" },
        { q: "Python is?", options: ["Low level", "High level", "Assembly", "Machine"], answer: "High level" },
        { q: "HTML full form?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperTransfer Markup Language", "None"], answer: "HyperText Markup Language" }
    ],
    movies: [
        { q: "Titanic director?", options: ["Spielberg", "Nolan", "Cameron", "Scorsese"], answer: "Cameron" },
        { q: "Avatar released in?", options: ["2005", "2009", "2012", "2015"], answer: "2009" },
        { q: "Avengers: Endgame released?", options: ["2017", "2018", "2019", "2020"], answer: "2019" },
        { q: "First Harry Potter movie?", options: ["2000", "2001", "2002", "2003"], answer: "2001" },
        { q: "Star Wars creator?", options: ["Lucas", "Spielberg", "Abrams", "Cameron"], answer: "Lucas" },
        { q: "Godfather director?", options: ["Coppola", "Scorsese", "Tarantino", "Hitchcock"], answer: "Coppola" },
        { q: "Who played Iron Man?", options: ["Downey Jr.", "Evans", "Hemsworth", "Pratt"], answer: "Downey Jr." },
        { q: "Inception director?", options: ["Cameron", "Nolan", "Scott", "Burton"], answer: "Nolan" },
        { q: "Frozen is by?", options: ["Pixar", "Disney", "DreamWorks", "Sony"], answer: "Disney" },
        { q: "Black Panther actor?", options: ["Boseman", "Jordan", "Mackie", "Evans"], answer: "Boseman" }
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

document.querySelectorAll(".category").forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.category;
        currentQuestions = [...questions[category]];
        shuffle(currentQuestions);
        document.getElementById("main").classList.add("hidden");
        document.getElementById("quiz-container").classList.remove("hidden");
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    });
});

function loadQuestion() {
    resetTimer();
    const qObj = currentQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = qObj.q;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    shuffle(qObj.options);
    qObj.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.addEventListener("click", () => checkAnswer(opt));
        optionsDiv.appendChild(btn);
    });

    startTimer();
}

function checkAnswer(selected) {
    clearInterval(timer);
    const correct = currentQuestions[currentQuestionIndex].answer;
    if (selected === correct) score++;
    document.querySelectorAll("#options button").forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) btn.style.backgroundColor = "green";
        else btn.style.backgroundColor = "red";
    });
}

document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").classList.add("hidden");
        document.getElementById("result-container").classList.remove("hidden");
        document.getElementById("score").textContent = `Your score: ${score}/${currentQuestions.length}`;
    }
});

document.getElementById("restart-btn").addEventListener("click", () => {
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
});

function startTimer() {
    timeLeft = 15;
    document.getElementById("time").textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer("TIME UP");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
