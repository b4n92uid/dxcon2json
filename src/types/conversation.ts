export interface Conversation {
  Name: string
  ConvName: string
  Owner: string
  RequiredFlags: FlagsList[]
  InvokeMethods: InvokeMethod[]
  Options: Options
  Actions: Action[]
}

export interface Action {
  Type: Type
  Label: string
  SpeechParams?: SpeechParams
  ChoiceParams?: ChoiceParams
  SetFlagParams?: SetFlagParams
  CheckFlagsParams?: CheckFlagsParams
  CheckObjectParams?: CheckObjectParams
  TransferObjectParams?: TransferObjectParams
  MoveCameraParams?: MoveCameraParams
  JumpParams?: JumpParams
  RandomParams?: RandomParams
  TriggerParams?: TriggerParams
  AddCompleteGoalParams?: AddCompleteGoalParams
  AddNoteParams?: AddNoteParams
  AddSkillPointsParams?: AddSkillPointsParams
  AddCreditsParams?: AddCreditsParams
  CheckPersonaParams?: CheckPersonaParams
  EndParams?: EndParams
}

export interface AddCompleteGoalParams {
  GoalName: string
  GoalText: string
  IsPrimaryGoal: boolean
  GoalCompleted: boolean
}

export interface AddCreditsParams {
  NumberOfCreditsToAdd: number
}

export interface AddNoteParams {
  NoteText: string
}

export interface AddSkillPointsParams {
  SkillPointsToAdd: number
  OptionalAwardMessage: string
}

export interface CheckFlagsParams {
  FlagsList: FlagsList[]
  IfFlagsPassJumpTo: string
}

export interface FlagsList {
  FlagName: string
  FlagValue: boolean
}

export interface CheckObjectParams {
  ObjectToLookFor: string
  IfObjectNotFoundJumpToLabel: string
}

export interface CheckPersonaParams {
  PersonaAttribute: PersonaAttribute
  Condition: Condition
  Value: number
  LabelToJumpTo: string
}

export enum Condition {
  GreaterEqual = 'GreaterEqual',
  Less = 'Less',
}

export enum PersonaAttribute {
  Credits = 'Credits',
}

export interface ChoiceParams {
  ClearScreen: boolean
  Choices: Choice[]
}

export interface Choice {
  ChoiceText: string
  AudioFileName: string
  RequiredFlags: FlagsList[]
  JumpToLabel: string
}

export interface EndParams {
  Label: string
}

export interface JumpParams {
  JumpToConversation: string
  JumpToLabel: string
}

export interface MoveCameraParams {
  CameraPosition: CameraPosition
  CameraTransition: string
}

export enum CameraPosition {
  HeadshotMid = 'HeadshotMid',
  ShouldersLeft = 'ShouldersLeft',
  ShouldersRight = 'ShouldersRight',
  SideTight = 'SideTight',
}

export enum Type {
  AddCredits = 'Add Credits',
  AddNote = 'Add Note',
  CheckFlags = 'Check Flags',
  CheckPersona = 'Check Persona',
  Choice = 'Choice',
  End = 'End',
  Jump = 'Jump',
  MoveCamera = 'Move Camera',
  Speech = 'Speech',
  TransferObject = 'Transfer Object',
}

export interface RandomParams {
  TargetLabels: string[]
  CycleEvents: boolean
  OnlyCycleOnce: boolean
  RandomAfterCycle: boolean
}

export interface SetFlagParams {
  FlagsList: any[]
}

export interface SpeechParams {
  ActorToSpeak: string
  SpeakingTo: string
  SpeechText: string
  AudioFileName: string
  Continued: boolean
}

export interface TransferObjectParams {
  ObjectToTransfer: string
  NumberOfItemsToTransfer: number
  TransferTo: string
  TransferFrom: string
  OnFailJumpTo: string
}

export interface TriggerParams {
  TriggerTag: string
}

export interface InvokeMethod {
  Type: string
  Radius: number
}

export interface Options {
  OnlyOnce: boolean
  IsDataLink: boolean
  NonInteractive: boolean
  RemainFP: boolean
  RandomCamPlacement: boolean
  CanBeInterrupted: boolean
  CannotBeInterrupted: boolean
}
