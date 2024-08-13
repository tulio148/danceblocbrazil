export default function CostumeCard({ costume, handle }) {
    return (
        <button onClick={() => handle(costume.id)}>
            <img
                src={`/costumesImages/${costume.id}/${costume.images.cover}`}
                alt={costume.name}
                className="md:h-80 md:w-54 shadow-xl transition-transform transform hover:scale-105"
                loading="lazy"
            />
        </button>
    );
}
