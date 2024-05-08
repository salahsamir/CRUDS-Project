
/**
 * 
 * @param {string} desc -the input that you want to slice
 * @param {number} num - the num of the text
 * @returns  text After slicing
 */

export function TextSlicer(desc:string,num:number=50){
    let text
    if(desc.length>=num){

    text=`${desc.slice(0,num)}.....`;
    }

    return text
}