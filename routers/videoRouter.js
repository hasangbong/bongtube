import express from 'express';
import { editVideo, upload, videoDetail} from '../controllers/videoController';
import routes from '../routes';

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail,videoDetail);
videoRouter.get(routes.editVideo,editVideo);

export default videoRouter;