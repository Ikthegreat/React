// --------------------------------------------------------------------------
// destructuring assignment
// 구조 분해 할당
// 배열 [], 객체 {} 구조 분해 스코프 내에서 사용할 변수(또는 상수)에 할당
{
  interface Course {
    id: number;
    title: string;
    url: string;
  }

  // 또는 const courses: Course[]
  const courses: Array<Course> = [
    {
      id: 1,
      title: "React 펀더멘탈",
      url: "https://fundamentals.dev/react",
    },
    {
      id: 2,
      title: "React Router 펀더멘탈",
      url: "https://fundamentals.dev/react-rouer",
    },
    {
      id: 3,
      title: "Recoil 펀더멘탈",
      url: "https://fundamentals.dev/recoil",
    },
  ];

  // courses.push({
  //   id: 1,
  //   title: "",
  //   url: "",
  // });

  function run() {
    // spreadArray();
    // spreadObject();
    spreadRender();
  }

  function spreadArray() {
    // 배열 구조에서 각 항목 추출
    // const reactCourse = courses[0];
    // 나머지 항목 배열로 재구성 추출
    // const restCourses = courses.slice(1);

    const [reactCourse, ...restCourses] = courses;

    console.log(reactCourse);
    console.log(restCourses);
  }

  function spreadObject() {
    // const [reactCourse, ...restCourses] = courses;

    // console.log(restCourses, Array.isArray(restCourses));

    const [, , recoilCourse] = courses;

    // React Hooks
    // const [, setState] = React.useState(100)

    console.log(recoilCourse);

    const [reactCourse] = courses;

    // let reactCourseId = reactCourse.id;
    // let reactCourseTitle = reactCourse.title;
    // let reactCourseUrl = reactCourse.url;

    // console.log(reactCourseId);
    // console.log(reactCourseTitle);
    // console.log(reactCourseUrl);

    // 객체 구조 분해 할당
    // 객체 구조 분해해서 지역 변수로 할당

    const { url, id, title } = reactCourse;

    // React Hooks
    // const { isLoading } = useCustomHook()

    console.log(id);
    console.log(url);
    console.log(title);

    // 또는

    const {
      url: reactCourseUrl,
      id: reactCourseId,
      title: reactCourseTitle,
    } = reactCourse;

    console.log(reactCourseId);
    console.log(reactCourseUrl);
    console.log(reactCourseTitle);
  }

  interface FoodRow {
    headline: string;
    content: string;
  }

  interface KoreanFoods {
    caption: string;
    rows: FoodRow[];
  }

  function spreadRender() {
    const koreanFoods: KoreanFoods = {
      caption: "한식 메뉴",
      rows: [
        { headline: "뚝배기 불고기", content: "8,000원" },
        { headline: "스팸치즈볶음밥", content: "7,500원" },
        { headline: "불고기낙지덮밥", content: "9,000원" },
      ],
    };

    const rendredResult = renderTable(koreanFoods);
    console.log(rendredResult);

    // data: any 는 타입 검사 안할거에요
    // 타입 검사를 안한다 = TypeScript 사용 이유가 없음

    function renderTable(data: KoreanFoods): string {
      return `
        <table class="table">
          <caption class="sr-only">${data.caption}</caption>
          ${data.rows
            .map(function (item) {
              return `
                <tr>
                  <th>${item.headline}</th>
                  <td>${item.content}</td>
                </tr>
              `;
            })
            .join("")}
        </table>
      `;
    }
  }

  run();
}
