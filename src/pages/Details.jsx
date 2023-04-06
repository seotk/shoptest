import { useParams, useNavigate } from "react-router-dom";
function Details(props) {
  let { id } = useParams();
  // console.log("params", id);
  // console.log("detail", props);

  let findId = props.data.find(function (x) {
    // props.data 배열에서 find() 메소드를 사용해서
    // 조건에 맞는 첫 번째 요소를 찾는다.
    return x.id == id;

    //객체의 ID 속성 값이 id 변수와 같은지 비교해서
    // true 인 경우 해당 요소를 반환한다는 의미
  });

  let navigate = useNavigate();
  return (
    <>
      <div>
        <h1>디테일 페이지</h1>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          {" "}
          이전 페이지
        </button>
        <div className="">{findId.id + 1}</div>
        <div className="">{findId.title}</div>
        <img src={`/img/${findId.img}`} alt="" />
      </div>
    </>
  );
}
export default Details;
