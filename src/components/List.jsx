import Card from "./Card";

const List = ({ list }) => {
  return (
    <div className="cardList">
      {list.map((el, i) => <Card key={i} {...el} />)}
    </div>
  );
};

export default List;
