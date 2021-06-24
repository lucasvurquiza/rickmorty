import "./styles.css";

type CharacterCarProps = {
  id: number;
  name: string;
  gender: string;
  picture: string;
  children: React.ReactNode;
};

export const CharacterCard = ({
  id,
  name,
  gender,
  picture,
  children,
}: CharacterCarProps) => {
  return (
    <div className="list">
      <img src={picture} alt={name} />
      <div className="list-content">
        <h2>Name: {name}</h2>
        <h3 hidden>ID: {id}</h3>
        <h4>Gender: {gender}</h4>
      </div>
      <div className="button">{children}</div>
    </div>
  );
};
