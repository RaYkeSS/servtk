import { Container, Grid2, Typography } from "@mui/material";
import { StyledBox } from "@/components";
import BenefitsCard from "./Card/Card";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";

export default function Benefits() {
  return (
    <StyledBox>
      <Container>
        <Typography variant="h2" gutterBottom>
          Наши преимущества
        </Typography>
        <Grid2 container spacing={3}>
          {cardText.map((e, i) => {
            return (
              <BenefitsCard key={i} icon={e.icon}>
                <Typography>{e.title}</Typography>
                <Typography>{e.descr}</Typography>
              </BenefitsCard>
            );
          })}
        </Grid2>
      </Container>
    </StyledBox>
  );
}

const iconSx = {
  width: "50%",
  height: "100%",
  borderRadius: "50%",
  p: 2,
  boxShadow: 2,
  backgroundColor: "primary.light",
};

const cardText = [
  {
    title: "Опыт на рынке:",
    descr:
      "Более 5 лет успешной работы на рынке подтверждают надежность и профессионализм компании, что создает доверие у клиентов и партнеров.",
    icon: <CalendarMonthOutlinedIcon sx={iconSx} />,
  },
  {
    title: "100% гарантия сохранности и доставки груза:",
    descr:
      "Обеспечение полной сохранности и своевременной доставки грузов создает уверенность у клиентов и повышает репутацию компании.",
    icon: <WorkspacePremiumOutlinedIcon sx={iconSx} />,
  },
  {
    title: "Оптимизация затрат:",
    descr:
      "Эффективные логистические процессы помогают сократить затраты на транспортировку и хранение товаров, что позволяет компании повысить свою конкурентоспособность.",
    icon: <PercentOutlinedIcon sx={iconSx} />,
  },
  {
    title: "Персонализированный подход к клиентам:",
    descr:
      "Логистическая компания предлагает индивидуальные решения, учитывающие специфические потребности каждого клиента, что позволяет строить долгосрочные партнерские отношения и повышать уровень удовлетворенности.",
    icon: <CalendarMonthOutlinedIcon sx={iconSx} />,
  },
  {
    title: "Международная сеть партнеров:",
    descr:
      "Наличие разветвленной сети партнеров и агентов по всему миру позволяет логистической компании предлагать услуги в различных регионах, обеспечивая быструю и надежную доставку грузов на международном уровне.",
    icon: <HandshakeOutlinedIcon sx={iconSx} />,
  },
];
