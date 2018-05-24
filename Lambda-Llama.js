let llamaNamer = function () {
    let possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    let randomizer = Math.floor(Math.random() * 7)
        const suffix = " the Llama"
        let name = possibleNames[randomizer]
        return name + suffix
    }
    nameMaker = llamaNamer()
    console.log(nameMaker)