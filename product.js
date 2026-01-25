// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm

function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;                     // mã sản phẩm
    this.name = name;                 // tên sản phẩm
    this.price = price;               // giá sản phẩm
    this.quantity = quantity;         // số lượng tồn kho
    this.category = category;         // danh mục sản phẩm
    this.isAvailable = isAvailable;   // trạng thái bán (true/false)
}

// ========== CÂU 2: Khởi tạo mảng products ==========
// Gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau

let products = [
    new Product(1, "Laptop Dell XPS 15", 35000000, 10, "Điện tử", true),
    new Product(2, "iPhone 15 Pro Max", 32000000, 25, "Điện tử", true),
    new Product(3, "Tai nghe Sony WH-1000XM5", 8500000, 0, "Điện tử", false),
    new Product(4, "Áo thun Uniqlo", 299000, 100, "Thời trang", true),
    new Product(5, "Quần jeans Levis", 1500000, 45, "Thời trang", true),
    new Product(6, "Giày Nike Air Max", 3200000, 30, "Thời trang", true),
    new Product(7, "Nồi cơm điện Philips", 1200000, 15, "Gia dụng", true),
    new Product(8, "Máy xay sinh tố", 850000, 0, "Gia dụng", false)
];

// Hiển thị danh sách sản phẩm
console.log("=== DANH SÁCH SẢN PHẨM ===\n");
products.forEach(function (product, index) {
    console.log(`${index + 1}. ${product.name}`);
    console.log(`   - Giá: ${product.price.toLocaleString('vi-VN')} VNĐ`);
    console.log(`   - Tồn kho: ${product.quantity}`);
    console.log(`   - Danh mục: ${product.category}`);
    console.log(`   - Trạng thái: ${product.isAvailable ? "Đang bán" : "Hết hàng"}`);
    console.log("");
});
