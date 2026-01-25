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

// ========== CÂU 3: Tạo mảng mới chỉ chứa name và price ==========

let productNamePrice = products.map(function (product) {
    return {
        name: product.name,
        price: product.price
    };
});

// Hiển thị mảng mới
console.log("=== MẢNG CHỈ CHỨA NAME VÀ PRICE ===\n");
console.log(productNamePrice);

// Hiển thị đẹp hơn
console.log("\n=== HIỂN THỊ CHI TIẾT ===\n");
productNamePrice.forEach(function (item, index) {
    console.log(`${index + 1}. ${item.name} - ${item.price.toLocaleString('vi-VN')} VNĐ`);
});

// ========== CÂU 4: Lọc sản phẩm còn hàng trong kho (quantity > 0) ==========

let productsInStock = products.filter(function (product) {
    return product.quantity > 0;
});

// Hiển thị kết quả
console.log("\n=== SẢN PHẨM CÒN HÀNG TRONG KHO ===\n");
console.log(`Tổng số sản phẩm còn hàng: ${productsInStock.length}/${products.length}\n`);

productsInStock.forEach(function (product, index) {
    console.log(`${index + 1}. ${product.name}`);
    console.log(`   - Tồn kho: ${product.quantity} sản phẩm`);
    console.log(`   - Giá: ${product.price.toLocaleString('vi-VN')} VNĐ`);
    console.log("");
});

// ========== CÂU 5: Kiểm tra có sản phẩm giá trên 30.000.000 ==========

let hasExpensiveProduct = products.some(function (product) {
    return product.price > 30000000;
});

console.log("\n=== KIỂM TRA SẢN PHẨM GIÁ TRÊN 30 TRIỆU ===\n");

if (hasExpensiveProduct) {
    console.log("✓ CÓ ít nhất một sản phẩm có giá trên 30.000.000 VNĐ");

    // Hiển thị các sản phẩm đó
    let expensiveProducts = products.filter(function (product) {
        return product.price > 30000000;
    });

    console.log(`\nDanh sách sản phẩm giá trên 30 triệu (${expensiveProducts.length} sản phẩm):\n`);
    expensiveProducts.forEach(function (product, index) {
        console.log(`${index + 1}. ${product.name} - ${product.price.toLocaleString('vi-VN')} VNĐ`);
    });
} else {
    console.log("✗ KHÔNG có sản phẩm nào có giá trên 30.000.000 VNĐ");
}
