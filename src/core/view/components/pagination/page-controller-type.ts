export default interface PageControllerParams{
  currentPage?: number
  lastPage?: number
  changePage: (page:number)=>void
}