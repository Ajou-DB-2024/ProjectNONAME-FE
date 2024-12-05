const GlobalAlertType = {
  NORMAL: "GLOBAL_ALERT_TYPE/NORMAL", // 일반알림
  SELECT: "GLOBAL_ALERT_TYPE/SELECT", // 단일선택
  PROMPT: "GLOBAL_ALERT_TYPE/PROMPT", // 입력 프롬프트
  WARNING: "GLOBAL_ALERT_TYPE/WARNING", // 주의
  ALERT: "GLOBAL_ALERT_TYPE/ALERT", // 경고
} as const;
type GlobalAlertType = typeof GlobalAlertType[ keyof typeof GlobalAlertType ]

type GlobalAlertCommonButton = {
  text: string,
  theme: string
}

export type GlobalAlertButton = GlobalAlertCommonButton & {
  value: string,
  onClick?: (value: string) => boolean | undefined | null
}

export type GlobalAlertPromptButton = GlobalAlertCommonButton & {
  onClick?: (value: string) => boolean | undefined | null
}

export type GlobalAlertSelctions = {
  text: string,
  descs?: string[],
  value: string,
}

type CommonGlobalAlertContent = {
  title: string,
  desc: string,
  buttons: GlobalAlertButton[]
}

export type GlobalAlertInfo = (
  {
    type: 
      typeof GlobalAlertType.NORMAL |
      typeof GlobalAlertType.WARNING |
      typeof GlobalAlertType.ALERT,
    contents: CommonGlobalAlertContent
  } |
  {
    type: typeof GlobalAlertType.SELECT
    contents: {
      title: string,
      desc: string,
      selections: GlobalAlertSelctions[]
      buttons: GlobalAlertButton[],
      onSelect: (value: string) => any
    }
  } |
  {
    type: typeof GlobalAlertType.PROMPT
    contents: {
      title: string,
      desc: string,
      buttons: GlobalAlertPromptButton[]
    }
  }
)