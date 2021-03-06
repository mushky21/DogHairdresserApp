USE [HairdresserDB]
GO
/****** Object:  Table [dbo].[HaircutTurns]    Script Date: 15/10/2020 15:56:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HaircutTurns](
	[userId] [bigint] NOT NULL,
	[arrivalDate] [datetime] NOT NULL,
	[dateOfRequest] [datetime] NOT NULL,
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[isCanceled] [bit] NULL,
 CONSTRAINT [PK_HaircutTimes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 15/10/2020 15:56:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[userId] [bigint] IDENTITY(1,1) NOT NULL,
	[username] [nvarchar](20) NOT NULL,
	[password] [nchar](20) NOT NULL,
	[firstName] [nchar](30) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[HaircutTurns]  WITH CHECK ADD  CONSTRAINT [FK_HaircutTimes_Users] FOREIGN KEY([userId])
REFERENCES [dbo].[Users] ([userId])
GO
ALTER TABLE [dbo].[HaircutTurns] CHECK CONSTRAINT [FK_HaircutTimes_Users]
GO
/****** Object:  StoredProcedure [dbo].[SP_UpdateCanelingOfTurn]    Script Date: 15/10/2020 15:56:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SP_UpdateCanelingOfTurn]
	-- Add the parameters for the stored procedure here
	@turnId bigint
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	UPDATE HaircutTurns
    SET isCanceled = 1
    WHERE Id=@turnId
END
GO
