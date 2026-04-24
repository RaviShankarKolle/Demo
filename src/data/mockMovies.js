const mockMovies = [
    {
      id: 1,
      title: "Inception",
      year: "2010",
      rating: "8.8",
      overview:
        "A thief who steals corporate secrets through dream-sharing technology is given a chance at redemption.",
      poster:
        "https://imgs.search.brave.com/_FFMlAvhN2uRochzC-JE751HZlkBjj_hW0k1a3KI-SA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE0ODMz/MDg1LndlYnA",
    },
    {
      id: 2,
      title: "Interstellar",
      year: "2014",
      rating: "8.6",
      overview:
        "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      poster:
        "https://imgs.search.brave.com/jvn-Vkh6EurBggBBnCv9wUOKV0mIl9CcVNKd9WKlwuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC82LzUv/MS8zMDYxNDQtMjE2/MHgzODQwLXBob25l/LTRrLWludGVyc3Rl/bGxhci1iYWNrZ3Jv/dW5kLWltYWdlLmpw/Zw",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: "2008",
      rating: "9.0",
      overview:
        "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological tests.",
      poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      id: 4,
      title: "Avatar",
      year: "2009",
      rating: "7.9",
      overview:
        "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting an alien civilization.",
      poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    },
    {
      id: 5,
      title: "Titanic",
      year: "1997",
      rating: "7.8",
      overview:
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious Titanic.",
      poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    },
    {
      id: 6,
      title: "Avengers: Endgame",
      year: "2019",
      rating: "8.4",
      overview:
        "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
      poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    },
    {
      id: 7,
      title: "Avengers: Infinity War",
      year: "2018",
      rating: "8.5",
      overview:
        "The Avengers and their allies must be willing to sacrifice all to defeat the powerful Thanos before his blitz of devastation.",
      poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    },
    {
      id: 8,
      title: "Iron Man",
      year: "2008",
      rating: "7.9",
      overview:
        "After being held captive, an industrialist builds a high-tech suit of armor to escape and become the superhero Iron Man.",
      poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    },
    {
      id: 9,
      title: "Doctor Strange",
      year: "2016",
      rating: "7.5",
      overview:
        "A former neurosurgeon embarks on a journey of healing, discovering the mystic arts.",
      poster: "https://image.tmdb.org/t/p/w500/xf8PbyQcR5ucXErmZNzdKR0s8ya.jpg",
    },
    {
      id: 10,
      title: "Guardians of the Galaxy",
      year: "2014",
      rating: "8.0",
      overview:
        "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    },
    {
      id: 11,
      title: "Black Panther",
      year: "2018",
      rating: "7.3",
      overview:
        "T'Challa, king of Wakanda, rises to the throne but faces challenges from enemies within his own country.",
      poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    },
    {
      id: 12,
      title: "Spider-Man: No Way Home",
      year: "2021",
      rating: "8.3",
      overview:
        "With Spider-Man's identity now revealed, Peter seeks help from Doctor Strange, but the spell goes wrong.",
      poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    },
    {
      id: 13,
      title: "Joker",
      year: "2019",
      rating: "8.5",
      overview:
        "A mentally troubled comedian embarks on a downward spiral that leads to the creation of the Joker.",
      poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    },
    {
      id: 14,
      title: "The Matrix",
      year: "1999",
      rating: "8.7",
      overview:
        "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
      poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    },
    {
      id: 15,
      title: "The Shawshank Redemption",
      year: "1994",
      rating: "9.3",
      overview:
        "Two imprisoned men bond over years, finding solace and redemption through acts of common decency.",
      poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
    {
      id: 16,
      title: "Forrest Gump",
      year: "1994",
      rating: "8.8",
      overview:
        "The life journey of Forrest Gump, a kind-hearted man with a low IQ, who unwittingly influences several historical events.",
      poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    },
    {
      id: 17,
      title: "The Godfather",
      year: "1972",
      rating: "9.2",
      overview:
        "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
      poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    },
    {
      id: 18,
      title: "The Lord of the Rings: The Return of the King",
      year: "2003",
      rating: "9.0",
      overview:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw attention from Frodo as he nears Mount Doom.",
      poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    },
    {
      id: 19,
      title: "The Lion King",
      year: "1994",
      rating: "8.5",
      overview:
        "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    },
    {
      id: 20,
      title: "Gladiator",
      year: "2000",
      rating: "8.5",
      overview:
        "A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family.",
      poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    },
    {
      id: 21,
      title: "The Avengers",
      year: "2012",
      rating: "8.0",
      overview:
        "Earth's mightiest heroes must come together to stop Loki and his alien army from enslaving humanity.",
      poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    },
    {
      id: 22,
      title: "Deadpool",
      year: "2016",
      rating: "8.0",
      overview:
        "A former special forces operative turned mercenary is subjected to an experiment that leaves him with accelerated healing powers.",
      poster:
        "https://imgs.search.brave.com/SGnQYZNiEBU5pQh-MwCkm8bTMMd3aPa-mm0N0dPTsVk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzcwLzIzLzEx/LzM2MF9GXzY3MDIz/MTExNl9uZDdCSmtB/bjZVY2pGWHNuVFR6/b0U4VXpRYkVwZU9H/SC5qcGc",
    },
    {
      id: 23,
      title: "Logan",
      year: "2017",
      rating: "8.1",
      overview:
        "In a future where mutants are nearly extinct, Wolverine and ailing Professor X protect a young mutant girl from dark forces.",
      poster:
        "https://imgs.search.brave.com/oWX2Rme-V-kgk7AnekmKKqQoQwAA5aXAqEGqOSVl5SI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk0ySmpPRGRr/TUdNdE5tWTJZUzAw/T0dNMkxUaGlZMll0/WkdZeU56RTROemMy/T0RBMFhrRXlYa0Zx/Y0djQC5qcGc",
    },
    {
      id: 24,
      title: "Black Widow",
      year: "2021",
      rating: "6.8",
      overview:
        "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
      poster: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    },
    {
      id: 25,
      title: "Doctor Strange in the Multiverse of Madness",
      year: "2022",
      rating: "7.0",
      overview:
        "Doctor Strange teams up with mystical allies to face a threat that could tear the multiverse apart.",
      poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    },
    {
      id: 26,
      title: "Shang-Chi and the Legend of the Ten Rings",
      year: "2021",
      rating: "7.4",
      overview:
        "Shang-Chi must confront the past he thought he left behind when he is drawn into the mysterious Ten Rings organization.",
      poster: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    },
    {
      id: 27,
      title: "Ant-Man",
      year: "2015",
      rating: "7.3",
      overview:
        "Armed with a suit that allows him to shrink in size, a cat burglar must embrace his inner hero to save the world.",
      poster: "https://image.tmdb.org/t/p/w500/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
    },
    {
      id: 28,
      title: "Ant-Man and the Wasp",
      year: "2018",
      rating: "7.1",
      overview:
        "Scott Lang balances being both a superhero and a father while teaming up with Hope Van Dyne to uncover secrets from the past.",
      poster:
        "https://imgs.search.brave.com/_Rf6WloFTdISXhsaHaMaCDDsepePawjUQpia5n9CG2Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9pbWFnZV9h/ZTMwZTMwNy5qcGVn",
    },
    {
      id: 29,
      title: "Guardians of the Galaxy Vol. 2",
      year: "2017",
      rating: "7.6",
      overview:
        "The Guardians struggle to keep together as a team while dealing with their personal issues and a mysterious new threat.",
      poster: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    },
    {
      id: 30,
      title: "Thor: Ragnarok",
      year: "2017",
      rating: "7.9",
      overview:
        "Thor must escape the alien planet Sakaar in time to save Asgard from Hela and the impending Ragnarok.",
      poster: "https://image.tmdb.org/t/p/w500/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
    },
    {
      id: 31,
      title: "Captain America: Civil War",
      year: "2016",
      rating: "7.8",
      overview:
        "Political interference causes a rift between the Avengers, dividing them into opposing factions.",
      poster:
        "https://imgs.search.brave.com/waxO0Gn0QxTjjmGThjfjf28XJhdCrTJOxXD-CrOY_wY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFydmVsLmNvbS9j/b250ZW50LzJ4LzAw/M2NhcF9vbnNfaW5s/XzA4LmpwZw",
    },
    {
      id: 32,
      title: "Captain Marvel",
      year: "2019",
      rating: "6.9",
      overview:
        "Carol Danvers becomes one of the universe's most powerful heroes as Earth is caught in the middle of a galactic war.",
      poster:
        "https://imgs.search.brave.com/anMG8jJPX5ZBuUCfsP4QYVgefMgJwXolbgRJcDVCJq8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oNy5h/bGFteS5jb20vY29t/cC9UMDJDNzIvY2Fw/dGFpbi1tYXJ2ZWwt/MjAxOS1kaXJlY3Rl/ZC1ieS1hbm5hLWJv/ZGVuLWFuZC1yeWFu/LWZsZWNrLWFuZC1z/dGFycmluZy1icmll/LWxhcnNvbi1nZW1t/YS1jaGFuLWp1ZGUt/bGF3LWFuZC1zYW11/ZWwtbC1qYWNrc29u/LXVzYWYtcGlsb3Qt/Y2Fyb2wtZGFudmVy/cy1iZWNvbWVzLW9u/ZS1vZi10aGUtbW9z/dC1wb3dlcmZ1bC1z/dXBlcmhlcm9zLWlu/LXRoZS11bml2ZXJz/ZS1UMDJDNzIuanBn",
    },
    {
      id: 33,
      title: "Thor",
      year: "2011",
      rating: "7.0",
      overview:
        "The powerful but arrogant Thor is cast out of Asgard and must learn humility to reclaim his hammer and protect Earth.",
      poster: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    },
    {
      id: 34,
      title: "The Incredible Hulk",
      year: "2008",
      rating: "6.7",
      overview:
        "Bruce Banner becomes the Hulk and struggles to control his powers while being hunted by the military.",
      poster: "https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    },
    {
      id: 35,
      title: "Guardians of the Galaxy Vol. 3",
      year: "2023",
      rating: "8.2",
      overview:
        "The Guardians must protect the universe while dealing with a powerful new threat and past secrets.",
      poster:
        "https://imgs.search.brave.com/D13UIDh6M69HKm-g_NLBjl7OzcTfbyLtSCvJsU0zfrQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpEQTNNemRs/WVRRdE1UVXhOaTAw/WmpKbUxUa3lPVFl0/TkRrelltSXpZVEpr/WmpNelhrRXlYa0Zx/Y0djQC5qcGc",
    },
    {
      id: 36,
      title: "Eternals",
      year: "2021",
      rating: "6.8",
      overview:
        "The immortal Eternals emerge from the shadows to protect humanity from their ancient enemies, the Deviants.",
      poster:
        "https://imgs.search.brave.com/ux3dLPsS3obzfbkAD-UfKgFoh3il3p1CGnpkxm42yno/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZXRl/cm5hbHMtbW92aWUt/MTQ0MC14LTI5NjAt/NjFpazlzbzd3ajZx/MGt6cS5qcGc",
    },
    {
      id: 37,
      title: "Black Panther: Wakanda Forever",
      year: "2022",
      rating: "7.3",
      overview:
        "The people of Wakanda fight to protect their nation after the death of King T’Challa.",
      poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    },
    {
      id: 38,
      title: "Spider-Man: Far From Home",
      year: "2019",
      rating: "7.5",
      overview:
        "Peter Parker goes on a school trip to Europe and faces a new threat known as Mysterio.",
      poster: "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    },
    {
      id: 39,
      title: "Doctor Strange",
      year: "2016",
      rating: "7.5",
      overview:
        "A former neurosurgeon embarks on a journey of healing, discovering the mystic arts.",
      poster: "https://image.tmdb.org/t/p/w500/xf8PbyQcR5ucXErmZNzdKR0s8ya.jpg",
    },
    {
      id: 40,
      title: "Iron Man 2",
      year: "2010",
      rating: "7.0",
      overview:
        "Tony Stark struggles with his health, new enemies, and the legacy of his father while being Iron Man.",
      poster:
        "https://imgs.search.brave.com/TNGOrf0Vpc-JmxZDzrU9ZsoVfwI-acel0iDe_QLs8m8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvaXJv/bi1tYW4tNGstaXBo/b25lLTNkLWFydC1t/azRyYnltOXJnaWdi/NW1jLmpwZw",
    },
  ];
  
  export default mockMovies;