import React, { useState, useEffect } from 'react';
import '../styles/PhotoWall.css';

const PhotoWall = () => {
    // 照片数据
    const [photos, setPhotos] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // 照片分类
    const categories = [
        { id: 'nature', name: '自然风光' },
        { id: 'city', name: '城市建筑' },
        { id: 'people', name: '人物肖像' },
        { id: 'animals', name: '动物世界' }
    ];

    // 初始化照片数据
    useEffect(() => {
        const samplePhotos = [
            { id: 1, category: 'nature', title: '山脉日出', liked: false },
            { id: 2, category: 'nature', title: '森林瀑布', liked: true },
            { id: 3, category: 'city', title: '城市天际线', liked: false },
            { id: 4, category: 'city', title: '历史建筑', liked: false },
            { id: 5, category: 'people', title: '微笑的女孩', liked: true },
            { id: 6, category: 'people', title: '街头艺术家', liked: false },
            { id: 7, category: 'animals', title: '草原雄狮', liked: false },
            { id: 8, category: 'animals', title: '深海鱼群', liked: false },
            { id: 9, category: 'nature', title: '沙漠日落', liked: false },
            { id: 10, category: 'city', title: '夜晚街道', liked: true },
            { id: 11, category: 'people', title: '老人肖像', liked: false },
            { id: 12, category: 'animals', title: '热带鹦鹉', liked: false },
        ];

        setPhotos(samplePhotos);
    }, []);

    // 筛选照片
    const filteredPhotos = photos.filter(photo => {
        const matchesCategory = activeCategory === 'all' || photo.category === activeCategory;
        const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // 切换收藏状态
    const toggleLike = (id) => {
        setPhotos(photos.map(photo =>
            photo.id === id ? {...photo, liked: !photo.liked} : photo
        ));
    };

    // 打开图片预览
    const openPreview = (photo) => {
        setSelectedPhoto(photo);
    };

    // 关闭图片预览
    const closePreview = () => {
        setSelectedPhoto(null);
    };

    // 计算收藏数量
    const likedCount = photos.filter(photo => photo.liked).length;

    return (
        <div className={`photo-wall-app ${darkMode ? 'dark-mode' : ''}`}>
            <header className="header">
                <h1>我的照片墙</h1>
                <div className="controls">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="搜索照片..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="search-icon">🔍</span>
                    </div>
                    <button
                        className="theme-toggle"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? '☀️ 亮色模式' : '🌙 暗色模式'}
                    </button>
                </div>
            </header>

            <div className="category-filter">
                <button
                    className={activeCategory === 'all' ? 'active' : ''}
                    onClick={() => setActiveCategory('all')}
                >
                    全部照片
                </button>
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={activeCategory === category.id ? 'active' : ''}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="stats-bar">
                <div className="stat-item">
                    <span className="stat-label">照片总数</span>
                    <span className="stat-value">{photos.length}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">已收藏</span>
                    <span className="stat-value">{likedCount}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">当前显示</span>
                    <span className="stat-value">{filteredPhotos.length}</span>
                </div>
            </div>

            <div className="photo-wall">
                {filteredPhotos.length > 0 ? (
                    filteredPhotos.map(photo => (
                        <div
                            key={photo.id}
                            className="photo-card"
                            onClick={() => openPreview(photo)}
                        >
                            <div className="image-container">
                                <div className={`placeholder-image ${photo.category}`} />
                                <button
                                    className={`like-btn ${photo.liked ? 'liked' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleLike(photo.id);
                                    }}
                                >
                                    {photo.liked ? '❤️' : '🤍'}
                                </button>
                            </div>
                            <div className="photo-info">
                                <h3>{photo.title}</h3>
                                <span className="category-tag">
                  {categories.find(cat => cat.id === photo.category).name}
                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <div className="no-results-icon">🖼️</div>
                        <h3>没有找到匹配的照片</h3>
                        <p>请尝试其他分类或搜索关键词</p>
                    </div>
                )}
            </div>

            {selectedPhoto && (
                <div className="image-preview" onClick={closePreview}>
                    <div className="preview-content" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={closePreview}>×</button>
                        <div className={`preview-image ${selectedPhoto.category}`} />
                        <div className="preview-info">
                            <h2>{selectedPhoto.title}</h2>
                            <p>分类: {categories.find(cat => cat.id === selectedPhoto.category).name}</p>
                            <div className="preview-actions">
                                <button
                                    className={`like-btn ${selectedPhoto.liked ? 'liked' : ''}`}
                                    onClick={() => {
                                        toggleLike(selectedPhoto.id);
                                        setSelectedPhoto({...selectedPhoto, liked: !selectedPhoto.liked});
                                    }}
                                >
                                    {selectedPhoto.liked ? '❤️ 已收藏' : '🤍 收藏图片'}
                                </button>
                                <button className="download-btn">⬇️ 下载图片</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <footer className="footer">
                <p>© 2023 我的照片墙 | 共 {photos.length} 张照片 | {likedCount} 张收藏</p>
            </footer>
        </div>
    );
};

export default PhotoWall;