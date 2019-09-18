function Book(info) {
    this.id = info.id; 
    this.categoryIds = info.categoryIds;
    this.color = info.color;
    this.title =  info.title; 
    this.isHolly = info.isHolly; 
    this.isScholarly = info.isScholarly;
}
export default Book;