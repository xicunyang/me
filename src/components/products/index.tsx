import React from "react";
import "./style.less";

interface IItem {
  title: string;
  desc?: string | React.ReactElement;
  jumpUrl?: string;
  disDit?: boolean;
  width?: number;
  height?: number;
}

interface IProps {
  title: string;
  list: IItem[];
}

const Title = ({item}: {item: IItem}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      {item.desc ? (
        <div
          className="title"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!item.disDit && <span className="dot">·</span>}
          {item.title}
        </div>
      ) : (
        <div className="title">
          {!item.disDit && <span className="dot">·</span>}
          {item.title}
        </div>
      )}

      <div
        style={{width: item.width}}
        className={`title-desc ${open ? "open" : ""}`}
      >
        {item.desc}
      </div>
    </div>
  );
};
const Products: React.FC<IProps> = ({title, list = []}) => {
  return (
    <div className="products">
      <div className="header">/ &nbsp;{title}&nbsp; /</div>
      <div className="body">
        {list.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                if (item.jumpUrl) {
                  window.open(item.jumpUrl);
                }
              }}
            >
              <Title item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
