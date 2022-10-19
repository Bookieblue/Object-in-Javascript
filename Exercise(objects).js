/*exercise one*/
const address = {
    street: 'No 2 Adeleke',
    city: 'Lagos',
    zipcode: 2064
} ;

function showAddress()
{
    for (let key in address)
    {
        console.log(key, address[key]);
    }
}

showAddress();

/*Exercise two*/
/*Factory Function*/ 

function showAddress()
{
   return {
        street: 'No 2 Adeleke',
        city: 'Lagos',
        zipcode: 2064
    }
}

const myAddress= showAddress();
console.log(myAddress);


 /*Construction Function*/
 
function ShowAddress()
{

        this.street = 'No 2 Adeleke';
        this.city = 'Lagos';
        this.zipcode = 2064;
}
const myAddress1 = new ShowAddress();
console.log(myAddress2);





/*Exercise three*/



function ShowAddress(street, city, zipcode)
{

        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
}

const address1 = new ShowAddress('No 2 Adeleke', 'Lagos', 2045);
const address2 = new ShowAddress('No 46 road-block', 'Rivers', 3045);
console.log(address1);
console.log(address2);

function areEqual(A1, A2)
{
    if (Object.keys(A1) === Object.keys(A2))
    {
        console.log(true);
    }
    else console.log(false);
   
}


function areSame(A1, A2)
{
    if (A1 === A2)
    {
        console.log(true);
    }
    else console.log(false);
}

areEqual(address1,address2);
areSame(address1,address2);


/*Exercise four*/

const blog = {
    title: 'cracked pot',
    body: 'the pot fell and got cracked',
    author: 'bookie',
    views: 99,
    comments: {
        body: 'how did it fall?',
        author: 'kunle'
    },
    isLive: true

}

for (let key in blog)
{
    console.log(key, ':', blog[key]);
}


/*Exercise five*/


let programming = {
    languages: ["Javascript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty:8,
    jokes: "https://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"

};

programming.languages.push("Go");
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;

for (let key in programming.languages)
{
     console.log(programming.languages[key]);
}
console.log('\n');

for (let key in programming)
{
      console.log(key);
}
console.log('\n');

for (let key in programming)
{
      console.log(programming[key]);
}

