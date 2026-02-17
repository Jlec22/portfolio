import './ImageGrid.css';
          

const images = [
  {id: 1, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', alt: 'Java'},
  {id: 2, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', alt: 'C++'},
  {id: 3, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', alt: 'React'},
  {id: 4, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg', alt: 'Kotlin'},
  {id: 5, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', alt: 'Git'},
  {id: 6, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', alt: 'C#'},
  {id: 7, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg', alt: 'Jupyter'},
  {id: 8, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', alt: 'Python'},
  {id: 9, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg', alt: 'Unity'}
];

const ImageGrid = () => {
  return (
    <div className="gallery">
      {images.map(image => (
        <div key={image.id} className="gallery__item">
          <img src={image.src} alt={image.alt} className="image" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
