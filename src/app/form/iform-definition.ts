
export interface IAnswers{
    id?:number | undefined,
    description?:string,
    formId?:number,
    questionId?: number,
    optionId?: number,
    userId?:number
}

export function newAnswer1(): IAnswers{
    const data: IAnswers = { 
        id : 1,
        description: '',
        formId:-1,
        questionId: -1,
        optionId: -1,
        userId:1
       
        }
    return data;
}

export interface IQuestions{
    id?:number| undefined,
    description?:string,
    selectedOptionId?: number | null,
    questionType?: '1' | '2', // questionType 1 == open-ended & questionType 2 == multiple-choice
    options?:IOptions[],
    listAnswers?:IAnswers[]
}

export function newQuestion1(): IQuestions{
    const data: IQuestions = {
        id : 1,
        description: '',
        questionType: '1', 
        selectedOptionId: 1,
        options:[],
        listAnswers:[]
        
    };
    return data;
}
export interface IOptions{
    id?:number| undefined,
    description?:string,

}

export function newOptions1(): IOptions{
    const data: IOptions = {
        id : 1,
        description: '',
    };
    return data;
}

export interface IFormDefinition{
    id?:number| undefined,
    title?:string,
    subTitle?:string,
    questions?:IQuestions[]
}

export function newForm1(): IFormDefinition{
    const data: IFormDefinition = {
        id : 1,
        title:'',
        subTitle:'',
        questions:[]
    };
    return data;
}
