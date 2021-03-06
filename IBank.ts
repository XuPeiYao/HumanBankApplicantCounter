interface IBank{
    getApplicantCount(url: string, min: number, max: number):Promise<number>;
    initList():Promise<void>;
    initPage():Promise<void>;    
}