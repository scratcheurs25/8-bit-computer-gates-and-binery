// Ajouter votre code ici
//% icon="\uf120"
namespace Gates{
    //%block
    export function and(A:boolean,B:boolean): boolean{
    return A && B
    }
    //%block
    export function not(A:boolean): boolean{
        return !A
    }
    //%block
    export function or(A:boolean , B:boolean):boolean{
        return A || B
    }
    //%block
    export	function xor(A:boolean,B:boolean):boolean{
        return (A != B)
    }
    export function nand(A: boolean, B: boolean): boolean {
        return !(A && B)
    }
    //%block
    export function nor(A: boolean, B: boolean): boolean {
        return !(A || B)
    }
    //%block
    export function xnor(A: boolean, B: boolean): boolean {
        return !(A != B)
    }
    //%block
    export function decimalToBinary(decimalNumber: number): string {
        // Assurer que le nombre est dans la plage de 8 bits
        decimalNumber = decimalNumber & 0xFF;

        // Convertir en binaire
        let binaryNumber: string = '';
        for (let i = 7; i >= 0; i--) {
            binaryNumber += (decimalNumber >> i) & 1;
        }
        return binaryNumber;
    }
    //%block
    export function binaryToDecimal(binaryNumber: string): number {
        // Utiliser parseInt avec la base 2 pour convertir la chaîne binaire en nombre décimal
        return parseInt(binaryNumber, 2);
    }
    //%block
    export function getBit(binaryNumber: string, position: number): boolean {
        // Vérifier si la position est valide
        if (position < 0 || position >= binaryNumber.length) {
            console.error("postition ivalide")
        }

        // Récupérer le bit à la position spécifiée et le convertir en booléen
        return binaryNumber.charAt(position - 1) === '1';
    }
}