import { Router } from 'express';
import { PostPabellon, GetPabellon } from '../controladores/pabellon';

export let pabellon_router = Router();
pabellon_router.post('/pabellon',PostPabellon);
 pabellon_router.get('./pabellon',GetPabellon);
/*pabellon_router.put('./pabellon',PutPabellon); */