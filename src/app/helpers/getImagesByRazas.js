
export const getImagesByRazas = async(raza) => {

    try{

        const url = `https://dog.ceo/api/breed/${raza}/images/random/90`;
        const resp = await fetch(url)
        const { message } = await resp.json();
        
        return message;

    }catch(e){
        console.error(e);
    };

};