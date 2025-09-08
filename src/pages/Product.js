import React, {useState} from 'react';
import '../styles/product.css'

function ProductCategoryRow({category}) {
    return (
        <tr className="category-row">
            <td colSpan="3">{category}</td>
        </tr>
    );
}

function ProductRow({product}) {
    return (
        <tr
            key={product.name}
            className={!product.stocked ? 'out-of-stock' : ''}
        >
            <td>
                {!product.stocked && <span className="stock-indicator">⛔</span>}
                {product.name}
            </td>
            <td>¥{product.price}</td>
            <td>
                {product.stocked ? (
                    <span className="in-stock">有库存</span>
                ) : (
                    <span className="out-of-stock-text">缺货</span>
                )}
            </td>
        </tr>
    );
}

function ProductTable({products}) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    // 搜索框
    function SearchBar() {
        return (
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="搜索产品..."
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    className="search-input"
                />
                <label className="stock-filter">
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                    />
                    仅显示有库存产品
                </label>
            </div>
        );
    }

    // 分组产品数据
    const groupedProducts = products.reduce((groups, product) => {
        const category = product.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(product);
        return groups;
    }, {});

    // 处理过滤逻辑
    const filteredProducts = Object.entries(groupedProducts).reduce(
        (filteredGroups, [category, productsInCategory]) => {
            const filtered = productsInCategory.filter(
                product =>
                    product.name.toLowerCase().includes(filterText.toLowerCase()) &&
                    (!inStockOnly || product.stocked)
            );

            if (filtered.length > 0) {
                filteredGroups[category] = filtered;
            }

            return filteredGroups;
        }, {}
    );

    function ProductRawItem() {
        return (
            <table className="product-table">
                <thead>
                <tr>
                    <th>名称</th>
                    <th>价格</th>
                    <th>库存状态</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(filteredProducts).map(([category, productsInCategory]) => (
                    <React.Fragment key={category}>
                        <ProductCategoryRow category={category}/>
                        {productsInCategory.map(product => (
                            <ProductRow key={product.name} product={product}/>
                        ))}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
        );
    }

    return (
        <div className="product-table-container">
            <SearchBar/>

            {Object.keys(filteredProducts).length === 0 ? (
                <NotResults/>
            ) : (
                <ProductRawItem/>
            )}
        </div>
    );

}

function NotResults() {
    return (
        <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>未找到匹配的产品</h3>
            <p>请尝试其他搜索词或调整筛选条件</p>
        </div>
    );
}

function FilterableProductTable({products}) {
    return (
        <div>
            <ProductTable products={products}/>
        </div>
    );
}


function Product() {
    const PRODUCTS = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},

        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
    ];

    return (
        <>
            <FilterableProductTable products={PRODUCTS}/>
        </>
    );

}

export default Product;