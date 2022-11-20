let num: number = 49
const str: string = 'str'

const logic: boolean = true

const num2: number[] = [1, 2, 3, 4]
const numArray: Array<number> = [4, 4, 4]

const words: string[] = ['eee', 'eeee']

//tuple
const contact: [string, number] = ['ddd', 4]

//any
let any: any = 333
any = 'dddd'
any = []

function fun1(name: string): void {
    console.log(name)
}

fun1('dddd');

//never
function trowERR(message: string): never {
    throw new Error(message)
}

//type
type Login = string
const login: Login = 'ADMIN'


type  sometype = string | null | undefined

//---------------------------------------------------------------------------


