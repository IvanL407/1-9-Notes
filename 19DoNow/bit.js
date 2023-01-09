let hairColor = ["Brown","Black","Dark Blonde","Brown","Brown","Brown",
"Brown","Blonde","Brown","Blonde","Blonde","Brown","Brown","Black","Black",
"Blonde","Brown","Brown","Amber ","Black","Brown","Black","Dark Blonde","Brown","Brown","Brown",
"Brown","Blonde","Brown","Blonde","Blonde","Brown","Brown","Black","Black",
"Blonde","Brown","Brown","Amber ","Black","Brown","Black","Dark Blonde","Brown","Brown","Brown",
"Brown","Blonde","Brown","Blonde","Blonde","Brown","Brown","Black","Black",
"Blonde","Brown","Brown","Amber ","Black","Brown","Black","Dark Blonde","Brown","Brown","Brown",
"Brown","Blonde","Brown","Blonde","Blonde","Brown","Brown","Black","Black",
"Blonde","Brown","Brown","Amber ","Black","Brown","Black","Dark Blonde","Brown","Brown","Brown",
"Brown","Blonde","Brown","Blonde","Blonde","Brown","Brown","Black","Black",
"Blonde","Brown","Brown","Amber ","Black","Brown","Black","Dark Blonde","Brown","Brown","Brown",
"Brown","Blonde","Brown","Blonde","Blonde","Brown","Brown","Black","Black",
"Blonde","Brown","Brown","Amber ","Black","Brown","Black","Dark Blonde","Brown","Brown","Brown",
"Brown","Blonde","Brown","Blonde","Blonde","Brown","Brown","Black","Black",
"Blonde","Brown","Brown","Amber ","Black","Black",
"Blonde","Brown","Brown","Amber ","Black","Brown","Black","Dark Blonde","Brown","Brown","Brown",
"Brown","Blonde","Brown","Blonde","Blonde","Brown","Brown","Black","Black",
"Blonde","Brown","Brown","Amber ","Black","Black",
"Blonde","Brown","Brown","Amber ","Black","Brown","Black","Dark Blonde","Brown","Brown","Brown",
"Brown","Blonde","Brown","Blonde","Blonde","Brown","Brown","Black","Black",
"Blonde","Brown","Brown","Amber ","Black"];

    // let count = 0;
    // for (let i = 0; i < hairColor.length; i++)
    // {
    //     if (hairColor[i] === "Brown")
    //     {
    //         count++;
    //     }
    // }
    // console.log(count);

    let count = 0;
    for (let i = 0; i < hairColor.length; i++)
    {
        if (hairColor[i] === 'Black')
        {
            count++;
        }
    }
    let percentage = (100 * count) / hairColor.length;
    console.log(percentage);
