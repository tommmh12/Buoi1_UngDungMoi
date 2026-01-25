// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm

function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;                     // mã sản phẩm
    this.name = name;                 // tên sản phẩm
    this.price = price;               // giá sản phẩm
    this.quantity = quantity;         // số lượng tồn kho
    this.category = category;         // danh mục sản phẩm
    this.isAvailable = isAvailable;   // trạng thái bán (true/false)
}

// ========== VÍ DỤ SỬ DỤNG ==========

// Tạo các đối tượng sản phẩm mới
let product1 = new Product(1, "Laptop Dell", 25000000, 10, "Điện tử", true);
let product2 = new Product(2, "Áo thun", 150000, 50, "Thời trang", true);
let product3 = new Product(3, "Tai nghe Sony", 500000, 0, "Điện tử", false);

// Hiển thị thông tin sản phẩm
console.log("=== Danh sách sản phẩm ===");
console.log(product1);
console.log(product2);
console.log(product3);

// Truy xuất thuộc tính
console.log("\n=== Truy xuất thuộc tính ===");
console.log("Tên sản phẩm 1:", product1.name);
console.log("Giá sản phẩm 2:", product2.price);
console.log("Trạng thái sản phẩm 3:", product3.isAvailable);
