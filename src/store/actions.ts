import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export function useAction() {
  const dispatch = useDispatch();

  return bindActionCreators({}, dispatch);
}
