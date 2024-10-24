import {
  Box,
  Container,
  Grid2,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { StyledBox } from "@/components";

export default function About() {
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <StyledBox>
      <Container>
        <Typography variant="h2" gutterBottom>
          О нас
        </Typography>
        <Grid2
          container
          justifyContent="space-between"
          sx={{ marginBottom: 6 }}
        >
          <Grid2 size={6}>
            <Typography variant="body1" gutterBottom>
              ООО "Сервисная Торговая Компания" — это лидер в области логистики,
              предлагающий инновационные решения для доставки и хранения грузов.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Наша миссия — обеспечить максимальную эффективность логистических
              процессов для наших клиентов. Мы располагаем современным парком
              транспортных средств и оборудованием, а также
              высококвалифицированной командой, готовой работать круглосуточно.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Наша цель — оптимизировать ваши расходы и повысить
              конкурентоспособность вашего бизнеса. С нами вы можете быть
              уверены в надежности и высоком качестве предоставляемых услуг.
            </Typography>
          </Grid2>
          <Grid2 size="auto">
            <ImageList
              sx={{ width: 500, height: 246 }}
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid2>
        </Grid2>
        <Grid2 container justifyContent="space-between">
          <Grid2 size="auto">
            <ImageList
              sx={{ width: 500, height: 246 }}
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid2>
          <Grid2 size={6}>
            <Typography variant="body1" gutterBottom>
              В ООО "Сервисная Торговая Компания" мы понимаем, что логистика —
              это не просто транспортировка, а важный элемент успешного бизнеса.
              Мы предлагаем полный спектр услуг: от грузоперевозок до
              складирования и таможенного оформления.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Наша команда использует современные технологии для отслеживания и
              управления грузами, обеспечивая прозрачность на каждом этапе. Мы
              гордимся нашей репутацией надежного партнера и стремимся к тому,
              чтобы каждый клиент чувствовал себя увереннее, выбирая нас.
            </Typography>
            <Typography variant="body1" gutterBottom>
              С нами вы получите комплексное решение для своей логистики,
              основанное на качестве, скорости и надежности.
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </StyledBox>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
];
