//Declaring an empty array to store NFTs
const nftCollection = [];

// Function to create a new NFT and add it to the collection
function createNFT(name, eyeColor, city, hobby) {
    // Create a new NFT object
    const nft = {                                   
        name: name,                                  
        eyeColor: eyeColor,
        city: city,
        hobby: hobby 
    }; 
    // Add the new NFT to the collection
    nftCollection.push(nft);                                    
    // Log a message indicating the NFT was minted
    console.log("Minted: \t\t" + name);
}

// Function to list all NFTs in the collection
function listNFTs() {
    // Loop through each NFT in the collection
    for (let i = 0; i < nftCollection.length; i++) {    
        // Display the details of each NFT
        console.log("\nName: \t\t\t" + nftCollection[i].name);
        console.log("Eye Color: \t\t" + nftCollection[i].eyeColor);
        console.log("City: \t\t\t" + nftCollection[i].city);
        console.log("Hobby: \t\t\t" + nftCollection[i].hobby);
    }
}

// Function to get the total number of NFTs.
function getTotalSupply() {                                                     
    // Displaying the total number of NFTs.
    console.log("\nTotal NFTs: \t\t" + nftCollection.length);
}

// creating two NFTs
createNFT("Himani", "brown", "Delhi", "fashionistas");     
createNFT("Aarya", "brown", "Uttarakhand", "Gaming");

listNFTs();
getTotalSupply();
