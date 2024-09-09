import {
  Achievement,
  Announcement,
  Application,
  Chat,
  ChatMembership,
  Comment,
  Education,
  Event,
  EventBookmark,
  HackathonTeam,
  Invitation,
  Meeting,
  Membership,
  Message,
  Opening,
  OpeningBookmark,
  Organization,
  OrganizationMembership,
  Post,
  PostBookmark,
  Profile,
  Project,
  ProjectBookmark,
  ResourceBucket,
  ResourceFile,
  Review,
  SubTask,
  Task,
  Team,
  User,
} from '.';

export const initialEducation: Education = {
  university: '',
  degree: '',
  description: '',
};

export const initialAchievement: Achievement = {
  id: '',
  title: '',
  skills: [],
};

export const initialProfile: Profile = {
  id: '',
  userID: '',
  achievements: [],
  areasOfCollaboration: [],
  degree: '',
  description: '',
  hobbies: [],
  yearOfGraduation: 0,
  school: '',
  email: '',
  location: '',
  phoneNo: '',
};

export const initialUser: User = {
  id: '',
  tags: [],
  links: [],
  email: '',
  name: '',
  resume: '',
  profilePic: '',
  profilePicBlurHash: 'no-hash',
  coverPic: '',
  coverPicBlurHash: 'no-hash',
  username: '',
  phoneNo: '',
  bio: '',
  title: '',
  tagline: '',
  profile: initialProfile,
  followers: [],
  following: [],
  memberships: [],
  posts: [],
  projects: [],
  noFollowers: 0,
  noFollowing: 0,
  noImpressions: 0,
  noProjects: 0,
  noCollaborativeProjects: 0,
  active: true,
  isFollowing: false,
  isOnboardingComplete: false,
  passwordChangedAt: new Date(),
  lastViewed: [],
  isVerified: false,
  isOrganization: false,
  githubUsername: '',
  organization: null,
  createdAt: '',
};

export const initialProject: Project = {
  id: '',
  slug: '',
  userID: '',
  title: '',
  tagline: '',
  coverPic: '',
  blurHash: '',
  description: '',
  page: '',
  user: initialUser,
  likedBy: [],
  comments: [],
  noLikes: 0,
  noShares: 0,
  noComments: 0,
  noImpressions: 0,
  createdAt: new Date(),
  tags: [],
  category: '',
  memberships: [],
  invitations: [],
  openings: [],
  chats: [],
  hashes: [],
  isPrivate: false,
  views: 0,
  totalNoViews: 0,
  privateLinks: [],
  links: [],
  organizationID: '',
  organization: null,
  noMembers: 1,
};

export const initialOpening: Opening = {
  id: '',
  projectID: '',
  project: initialProject,
  organizationID: '',
  organization: null,
  userID: '',
  user: initialUser,
  title: '',
  description: '',
  applications: [],
  noApplications: 0,
  noImpressions: 0,
  tags: [],
  active: false,
  createdAt: new Date(),
};

export const initialMembership: Membership = {
  id: '',
  projectID: '',
  project: initialProject,
  userID: '',
  user: initialUser,
  teams: [],
  role: '',
  title: '',
  active: false,
  createdAt: new Date(),
};

export const initialPost: Post = {
  id: '',
  rePostID: '',
  rePost: null,
  userID: '',
  images: [],
  content: '',
  user: initialUser,
  noLikes: 0,
  noShares: 0,
  noComments: 0,
  noImpressions: 0,
  noReposts: 0,
  isRePost: false,
  postedAt: new Date(),
  tags: [],
  hashes: [],
  isEdited: false,
  taggedUsers: [],
};

export const initialOrganization: Organization = {
  id: '',
  userID: '',
  user: initialUser,
  title: '',
  memberships: [],
  invitations: [],
  teams: [],
  noEvents: 0,
  noMembers: 0,
  noProjects: 0,
  createdAt: new Date(),
};

export const initialOrganizationMembership: OrganizationMembership = {
  id: '',
  organizationID: '',
  organization: initialOrganization,
  userID: '',
  user: initialUser,
  teams: [],
  role: '',
  title: '',
  createdAt: new Date(),
};

export const initialComment: Comment = {
  id: '',
  userID: '',
  user: initialUser,
  content: '',
  noLikes: 0,
  noReplies: 0,
  createdAt: new Date(),
  likedBy: [],
  postID: '',
  post: initialPost,
  projectID: '',
  project: initialProject,
  eventID: '',
  event: null,
  applicationID: '',
  application: null,
  parentCommentID: '',
  announcementID: '',
  announcement: null,
  taskID: '',
  task: null,
  isRepliedComment: false,
  level: 1,
  taggedUsers: [],
};

export const initialApplication: Application = {
  id: '',
  openingID: '',
  opening: initialOpening,
  organizationID: '',
  organization: null,
  userID: '',
  user: initialUser,
  email: '',
  projectID: '',
  project: initialProject,
  status: 0,
  content: '',
  resume: '',
  links: [],
  score: -1,
  createdAt: new Date(),
  noComments: 0,
};

export const initialAnnouncement: Announcement = {
  id: '',
  userID: '',
  title: '',
  content: '',
  noLikes: 0,
  noShares: 0,
  noComments: 0,
  createdAt: new Date(),
  isEdited: false,
  taggedUsers: [],
  isOpen: true,
  organizationID: '',
  organization: initialOrganization,
};

export const initialMessage: Message = {
  id: '',
  content: '',
  chatID: '',
  chat: null,
  userID: '',
  user: initialUser,
  createdAt: new Date(),
  postID: '',
  post: initialPost,
  projectID: '',
  project: initialProject,
  openingID: '',
  opening: initialOpening,
  profileID: '',
  profile: initialUser,
  eventID: '',
  event: null,
  messageID: '',
  message: null,
  announcementID: '',
  announcement: initialAnnouncement,
  readBy: [],
};

export const initialChat: Chat = {
  id: '',
  title: '',
  description: '',
  userID: '',
  user: initialUser,
  createdAt: new Date(),
  messages: [],
  latestMessageID: '',
  latestMessage: initialMessage,
  isAccepted: false,
  isAdminOnly: false,
  isGroup: false,
  coverPic: '',
  invitations: [],
  memberships: [],
  noMembers: 0,
  organization: null,
  organizationID: '',
  project: null,
  projectID: '',
};

export const initialInvitation: Invitation = {
  id: '',
  userID: '',
  user: initialUser,
  senderID: '',
  sender: initialUser,
  projectID: '',
  project: initialProject,
  organizationID: '',
  organization: initialOrganization,
  chatID: '',
  chat: initialChat,
  eventID: '',
  event: null,
  title: '',
  status: 0,
  isRead: false,
  createdAt: new Date(),
};

export const initialChatMembership: ChatMembership = {
  id: '',
  userID: '',
  user: initialUser,
  chatID: '',
  isAdmin: false,
  isBlocked: false,
  createdAt: new Date(),
  lastReadMessage: initialMessage,
  lastReadMessageID: '',
};

export const initialPostBookmark: PostBookmark = {
  id: '',
  title: '',
  userID: '',
  postItems: [],
  createdAt: new Date(),
};

export const initialProjectBookmark: ProjectBookmark = {
  id: '',
  title: '',
  userID: '',
  projectItems: [],
  createdAt: new Date(),
};

export const initialOpeningBookmark: OpeningBookmark = {
  id: '',
  title: '',
  userID: '',
  openingItems: [],
  createdAt: new Date(),
};

export const initialEventBookmark: EventBookmark = {
  id: '',
  title: '',
  userID: '',
  eventItems: [],
  createdAt: new Date(),
};

export const initialTask: Task = {
  id: '',
  title: '',
  description: '',
  userID: '',
  user: initialUser,
  tags: [],
  users: [],
  subTasks: [],
  deadline: new Date(),
  isCompleted: false,
  projectID: '',
  project: initialProject,
  organization: initialOrganization,
  organizationID: '',
  priority: 'low',
  difficulty: 'basic',
  noComments: 0,
  histories: [],
  prID: '',
  prLink: '',
  prStatus: -1,
};

export const initialSubTask: SubTask = {
  id: '',
  title: '',
  description: '',
  tags: [],
  users: [],
  deadline: new Date(),
  isCompleted: false,
  taskID: '',
  priority: 'low',
  difficulty: 'basic',
};

export const initialEvent: Event = {
  id: '',
  title: '',
  tagline: '',
  coverPic: '',
  blurHash: '',
  description: '',
  noLikes: 0,
  noShares: 0,
  noComments: 0,
  noViews: 0,
  noImpressions: 0,
  coordinators: [],
  tags: [],
  category: '',
  links: [],
  organizationID: '',
  organization: initialOrganization,
  coHosts: [],
  startTime: new Date(),
  endTime: new Date(),
  location: '',
  meetingID: '',
  meeting: null,
  createdAt: new Date(),
  userID: '',
  hackathon: null,
  hackathonID: '',
};

export const initialReview: Review = {
  id: '',
  organizationID: '',
  userID: '',
  user: initialUser,
  content: '',
  noUpVotes: 0,
  noDownVotes: 0,
  rating: 0,
  isAnonymous: false,
  createdAt: new Date(),
};

export const initialResourceBucket: ResourceBucket = {
  id: '',
  organizationID: '',
  title: '',
  description: '',
  noFiles: 0,
  viewAccess: '',
  editAccess: '',
  resourceFiles: [],
  createdAt: new Date(),
};

export const initialResourceFile: ResourceFile = {
  id: '',
  title: '',
  description: '',
  path: '',
  resourceBucketID: '',
  type: '',
  userID: '',
  user: initialUser,
  isFileUploaded: false,
  createdAt: new Date(),
};

export const initialMeeting: Meeting = {
  id: '',
  dyteID: '',
  title: '',
  description: '',
  tags: [],
  startTime: new Date(),
  endTime: new Date(),
  frequency: 'none',
  day: '',
  date: -1,
  isOnline: false,
  isOpenForMembers: false,
  isLive: false,
  allowExternalParticipants: false,
  organizationID: '',
  organization: initialOrganization,
  userID: '',
  user: initialUser,
  participants: [],
  rsvp: [],
  createdAt: new Date(),
  nextSessionTime: new Date(),
  eventID: '',
  sessions: [],
};

export const initialTeam: Team = {
  id: '',
  title: '',
  description: '',
  color: '#ffffff',
  memberships: [],
  noUsers: 0,
  tags: [],
  createdAt: new Date(),
};

export const initialHackathonTeam: HackathonTeam = {
  id: '',
  hackathonID: '',
  title: '',
  token: '',
  idea: '',
  userID: '',
  user: initialUser,
  projectID: '',
  project: initialProject,
  memberships: [],
  isEliminated: false,
  noComments: 0,
  createdAt: new Date(),
  comments: [],
};
