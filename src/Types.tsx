export interface RowData {
    name: string,
    apr: number,
    may: number,
    jun: number,
    jul: number,
    aug: number,
    sep: number,
    oct: number,
    nov: number,
    dec: number,
    jan: number,
    feb: number,
    mar: number,
    history: Array<History>
}

export interface History {
    date: string,
    customerId: string,
    amount: number,
}

export interface FruitData {
    name: string,
    total_qty: string,
    taste: string,
    season: string,
    history: Array<History>
}

export interface IVillageData {
    id:number
    village_name: any | null,
    description?: string,
    nation_id?: number
  }

export interface FlaskApiData{
    domain:string,
    time:number,
    user:string,
    user1:string,
    username:string|null
}
  
