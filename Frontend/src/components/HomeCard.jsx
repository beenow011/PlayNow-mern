import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Defaultthumbnail from "../assets/loginPage.jpg";
import { useNavigate } from "react-router-dom";
export default function ActionAreaCard({
  thumbnail,
  title,
  owner,
  _id,
  description,
}) {
  const [hover, setHover] = React.useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${_id}`);
  };
  return (
    <Card sx={{ maxWidth: 300 }} onClick={handleClick}>
      <CardActionArea className="">
        <div
          className="relative"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <CardMedia
            component="img"
            image={thumbnail}
            alt="thumbnail"
            className="object-cover h-48 w-48 "
            onError={(e) => {
              e.target.src = Defaultthumbnail; // Replace 'path_to_default_image' with the URL or path to your default image
            }}
          />
          {hover && (
            <div className="absolute text-white top-0 h-full w-full flex justify-center items-center bg-black/40">
              <p className="font-semibold">{description.slice(0, 15)}</p>
            </div>
          )}
        </div>
        <div className="flex bg-black">
          <div className="flex items-center justify-center pl-2 py-2">
            <img
              src={owner[0]?.avatar}
              className="object-cover rounded-full h-10 ring-2 ring-violet-700 w-10"
            />
          </div>
          <CardContent className=" text-white">
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="white" className="ml-3">
              {owner[0]?.username}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}
