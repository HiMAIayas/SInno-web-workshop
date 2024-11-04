type ClubType = {
    img:string
}
const clubnameArr = [
    "sssc","sinno","ssc","dance","basketball","automech","mc","mac","cheer","photo","wat","siam","boardgame","volunteer","kendo"
]
export const clubs:ClubType[] = clubnameArr.map((club)=>{
    return {
        img:"/club/"+club+".png"
    }
})